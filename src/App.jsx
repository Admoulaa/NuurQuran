import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

import { STORAGE_KEYS, THEMES, RECITERS, SURAHS } from "./data/constants";
import { usePersistentState } from "./hooks/usePersistentState";
import { useSurahData } from "./hooks/useSurahData";
import { useTimingData } from "./hooks/useTimingData";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { getDailyAyah, padSurah, findCurrentVerse, findTimingForVerse, getVerseAudioUrl, hasPerVerseAudio } from "./utils/helpers";
import { createStyles } from "./styles/createStyles";

import { AppShell } from "./components/AppShell";
import { BottomNav } from "./components/BottomNav";
import { MiniPlayer } from "./components/MiniPlayer";

import { TodayPage } from "./components/pages/TodayPage";
import { PlayerPage } from "./components/pages/PlayerPage";
import { ReadingPage } from "./components/pages/ReadingPage";
import { ReadingPlanPage } from "./components/pages/ReadingPlanPage";
import { BookmarksPage } from "./components/pages/BookmarksPage";
import { SettingsPage } from "./components/pages/SettingsPage";

export default function App() {
  const audioRef = useRef(null);

  // ============================================
  // ÉTATS - Paramètres utilisateur
  // ============================================
  const [activeTab, setActiveTab] = useState("today");
  const [language, setLanguage] = usePersistentState(STORAGE_KEYS.language, "fr");
  const [showPhonetic, setShowPhonetic] = usePersistentState(STORAGE_KEYS.phonetic, true);
  const [bookmarks, setBookmarks] = usePersistentState(STORAGE_KEYS.bookmarks, []);
  const [currentSurahNumber, setCurrentSurahNumber] = usePersistentState(STORAGE_KEYS.lastSurah, 1);
  const [currentVerse, setCurrentVerse] = usePersistentState(STORAGE_KEYS.lastVerse, 1);
  const [audioStarted, setAudioStarted] = usePersistentState(STORAGE_KEYS.audioStarted, false);
  const [selectedReciterId, setSelectedReciterId] = usePersistentState(STORAGE_KEYS.reciterId, RECITERS[0].id);
  const [themeId, setThemeId] = usePersistentState(STORAGE_KEYS.theme, "sand");
  const [verseRepeatCount, setVerseRepeatCount] = usePersistentState(STORAGE_KEYS.verseRepeatCount, 3);
  const [glowEnabled, setGlowEnabled] = usePersistentState(STORAGE_KEYS.glowEnabled, true);
  
  const [search, setSearch] = useState("");

  // ============================================
  // MÉMOS - Données dérivées
  // ============================================
  const theme = useMemo(() => THEMES[themeId] || THEMES.sand, [themeId]);
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  const selectedReciter = useMemo(
    () => RECITERS.find((item) => item.id === selectedReciterId) || RECITERS[0],
    [selectedReciterId]
  );
  
  const currentSurah = useMemo(
    () => SURAHS.find((item) => item.number === currentSurahNumber) || SURAHS[0],
    [currentSurahNumber]
  );
  
  const bookmarkedSurahs = useMemo(
    () => SURAHS.filter((surah) => bookmarks.includes(surah.number)),
    [bookmarks]
  );
  
  const currentAudioSrc = useMemo(
    () => `${selectedReciter.audioServer}${padSurah(currentSurahNumber)}.mp3`,
    [selectedReciter.audioServer, currentSurahNumber]
  );
  
  const dailyAyah = useMemo(() => getDailyAyah(), []);

  // ============================================
  // HOOKS - Données distantes
  // ============================================
  const remoteState = useSurahData(currentSurahNumber, language);
  const timingState = useTimingData(selectedReciter, currentSurahNumber);

  // ============================================
  // HOOKS - Audio player minimal
  // ============================================
  const audioPlayer = useAudioPlayer(audioRef);

  // ============================================
  // SUIVI DU VERSET ACTIF
  // Utilise le temps audio + timings pour trouver le verset
  // ============================================
  useEffect(() => {
    if (!timingState.hasTimings || !audioPlayer.isPlaying) return;

    let animationId;
    let lastVerse = currentVerse;

    const updateVerse = () => {
      const currentTimeMs = audioRef.current?.currentTime * 1000;
      if (currentTimeMs) {
        const verse = findCurrentVerse(timingState.timings, currentTimeMs);
        if (verse !== lastVerse) {
          lastVerse = verse;
          setCurrentVerse(verse);
        }
      }
      animationId = requestAnimationFrame(updateVerse);
    };

    animationId = requestAnimationFrame(updateVerse);
    return () => cancelAnimationFrame(animationId);
  }, [timingState.hasTimings, timingState.timings, audioPlayer.isPlaying, setCurrentVerse]);

  // ============================================
  // EFFETS - Source audio
  // ============================================
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentAudioSrc;
    audio.load();
  }, [currentAudioSrc]);

  // Exposer les timings globalement pour le suivi
  useEffect(() => {
    window.__timings = timingState.timings;
  }, [timingState.timings]);

  // ============================================
  // ACTIONS UTILISATEUR
  // ============================================

  const toggleBookmark = useCallback((surahNumber) => {
    setBookmarks((prev) =>
      prev.includes(surahNumber)
        ? prev.filter((id) => id !== surahNumber)
        : [...prev, surahNumber].sort((a, b) => a - b)
    );
  }, [setBookmarks]);

  const openSurah = useCallback((surahNumber) => {
    setCurrentSurahNumber(surahNumber);
    setCurrentVerse(1);
    setSearch("");
    setActiveTab("read");
  }, [setCurrentSurahNumber, setCurrentVerse]);

  const changeReciter = useCallback((reciter) => {
    setSelectedReciterId(reciter.id);
  }, [setSelectedReciterId]);

  const enableAudio = useCallback(async (maybeReciter) => {
    if (maybeReciter?.id && maybeReciter.id !== selectedReciterId) {
      setSelectedReciterId(maybeReciter.id);
    }

    audioPlayer.seekTo(0);
    audioPlayer.play();
    setAudioStarted(true);
  }, [selectedReciterId, audioPlayer, setAudioStarted]);

  const selectVerse = useCallback((verseNumber) => {
    const audio = audioRef.current;
    
    // Vérifier si le récitant支持 l'audio par verset (Alafasy seulement sur le-coran.com)
    const supportsPerVerse = hasPerVerseAudio(selectedReciterId);
    
    if (supportsPerVerse && audio) {
      // Utiliser le vrai fichier audio par verset de le-coran.com
      const verseAudioUrl = getVerseAudioUrl(currentSurahNumber, verseNumber, selectedReciterId);
      audio.src = verseAudioUrl;
      audio.load();
      audioPlayer.play();
      setAudioStarted(true);
    } else {
      // Fallback: seek dans le fichier complet
      const timing = findTimingForVerse(timingState.timings, verseNumber);
      if (timing) {
        audioPlayer.seekTo(timing.startMs / 1000);
      }
    }
    
    setCurrentVerse(verseNumber);
  }, [timingState.timings, audioPlayer, setCurrentVerse, setAudioStarted, selectedReciterId, currentSurahNumber]);

  const toggleLoopVerseHandler = useCallback((verseNumber) => {
    // TODO: Implémenter boucle simple si besoin
    console.log("Boucle verset:", verseNumber);
  }, []);

  const resetLearning = useCallback(() => {
    audioPlayer.seekTo(0);
    setCurrentVerse(1);
  }, [audioPlayer, setCurrentVerse]);

  // ============================================
  // MEDIA SESSION
  // ============================================
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: `${currentSurah.translit} · verset ${currentVerse}`,
      artist: selectedReciter.name,
      album: "Quran Player",
    });

    navigator.mediaSession.setActionHandler("play", () => audioPlayer.togglePlay());
    navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());

    return () => {
      navigator.mediaSession.setActionHandler("play", null);
      navigator.mediaSession.setActionHandler("pause", null);
    };
  }, [currentSurah.translit, currentVerse, selectedReciter.name, audioPlayer]);

  // ============================================
  // RENDU
  // ============================================
  return (
    <AppShell theme={theme} styles={styles}>
      <audio ref={audioRef} preload="auto" hidden />

      {activeTab === "today" && (
        <TodayPage
          onOpenSurah={openSurah}
          onGoPlayer={() => setActiveTab("player")}
          dailyAyah={dailyAyah}
          styles={styles}
          theme={theme}
        />
      )}

      {activeTab === "player" && (
        <PlayerPage
          selectedReciter={selectedReciter}
          currentSurah={currentSurah}
          currentVerse={currentVerse}
          audioReady={audioPlayer.isReady}
          audioError={audioPlayer.error}
          isPlaying={audioPlayer.isPlaying}
          onEnableAudio={enableAudio}
          onTogglePlay={audioPlayer.togglePlay}
          onOpenReading={() => setActiveTab("read")}
          onChangeReciter={changeReciter}
          timingAvailable={timingState.hasTimings}
          timingLoading={timingState.loading}
          timingError={timingState.error}
          styles={styles}
          theme={theme}
        />
      )}

      {activeTab === "read" && (
        <ReadingPage
          currentSurah={currentSurah}
          currentSurahNumber={currentSurahNumber}
          setCurrentSurahNumber={setCurrentSurahNumber}
          currentVerse={currentVerse}
          setCurrentVerse={setCurrentVerse}
          language={language}
          setLanguage={setLanguage}
          showPhonetic={showPhonetic}
          setShowPhonetic={setShowPhonetic}
          search={search}
          setSearch={setSearch}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          remoteState={remoteState}
          selectedReciter={selectedReciter}
          isPlaying={audioPlayer.isPlaying}
          audioReady={audioPlayer.isReady}
          audioError={audioPlayer.error}
          timingState={timingState}
          glowEnabled={glowEnabled}
          onTogglePlay={audioPlayer.togglePlay}
          onEnableAudio={enableAudio}
          onOpenSurah={openSurah}
          onSelectVerse={selectVerse}
          onToggleLoopVerse={toggleLoopVerseHandler}
          audioRef={audioRef}
          styles={styles}
          theme={theme}
        />
      )}

      {activeTab === "plan" && (
        <ReadingPlanPage onOpenSurah={openSurah} styles={styles} theme={theme} />
      )}

      {activeTab === "bookmarks" && (
        <BookmarksPage
          bookmarkedSurahs={bookmarkedSurahs}
          currentSurahNumber={currentSurahNumber}
          glowEnabled={glowEnabled}
          onOpenSurah={openSurah}
          onToggleBookmark={toggleBookmark}
          styles={styles}
          theme={theme}
        />
      )}

      {activeTab === "settings" && (
        <SettingsPage
          language={language}
          setLanguage={setLanguage}
          themeId={themeId}
          setThemeId={setThemeId}
          verseRepeatCount={verseRepeatCount}
          setVerseRepeatCount={setVerseRepeatCount}
          glowEnabled={glowEnabled}
          setGlowEnabled={setGlowEnabled}
          showPhonetic={showPhonetic}
          setShowPhonetic={setShowPhonetic}
          resetLearning={resetLearning}
          styles={styles}
          theme={theme}
        />
      )}

      <MiniPlayer
        visible={audioStarted}
        currentSurah={currentSurah}
        currentVerse={currentVerse}
        selectedReciter={selectedReciter}
        isPlaying={audioPlayer.isPlaying}
        audioReady={audioPlayer.isReady}
        audioError={audioPlayer.error}
        onOpen={() => setActiveTab("read")}
        onTogglePlay={audioPlayer.togglePlay}
        styles={styles}
        theme={theme}
      />

      <BottomNav activeTab={activeTab} onChange={setActiveTab} styles={styles} theme={theme} />
    </AppShell>
  );
}

