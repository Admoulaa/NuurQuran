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
  const isSeekingRef = useRef(false);

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

  const [readingMode, setReadingMode] = usePersistentState("quran-pro-reading-mode", "translation");

  const [isPerVerseMode, setIsPerVerseMode] = useState(false);

  const preloadAudioRef = useRef(null);
  const [preloadedVerse, setPreloadedVerse] = useState(null);

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

  const previousSurah = useMemo(() => {
    if (currentSurahNumber > 1) return SURAHS.find((s) => s.number === currentSurahNumber - 1);
    return null;
  }, [currentSurahNumber]);

  const nextSurah = useMemo(() => {
    if (currentSurahNumber < 114) return SURAHS.find((s) => s.number === currentSurahNumber + 1);
    return null;
  }, [currentSurahNumber]);

  // ============================================
  // HOOKS - Données distantes
  // ============================================
  const remoteState = useSurahData(currentSurahNumber, language);
  const timingState = useTimingData(selectedReciter, currentSurahNumber);

  // ============================================
  // HOOKS - Audio player
  // ============================================
  const audioPlayer = useAudioPlayer(audioRef);

  // ============================================
  // SUIVI DU VERSET ACTIF
  // ============================================
  useEffect(() => {
    if (!timingState.hasTimings || !audioPlayer.isPlaying) return;

    let animationId;
    let lastVerse = null;

    const updateVerse = () => {
      const audio = audioRef.current;
      if (!audio) {
        animationId = requestAnimationFrame(updateVerse);
        return;
      }

      const currentTimeMs = audio.currentTime * 1000;
      const durationMs = audio.duration * 1000;

      if (!currentTimeMs || isNaN(currentTimeMs) || currentTimeMs <= 0 || currentTimeMs > durationMs + 5000) {
        animationId = requestAnimationFrame(updateVerse);
        return;
      }

      if (isSeekingRef.current) {
        animationId = requestAnimationFrame(updateVerse);
        return;
      }

      const verse = findCurrentVerse(timingState.timings, currentTimeMs);

      if (verse !== lastVerse && verse > 0 && verse <= timingState.timings.length) {
        lastVerse = verse;
        setCurrentVerse(verse);
      }

      animationId = requestAnimationFrame(updateVerse);
    };

    animationId = requestAnimationFrame(updateVerse);
    return () => cancelAnimationFrame(animationId);
  }, [timingState.hasTimings, timingState.timings, audioPlayer.isPlaying, setCurrentVerse]);

  // ============================================
  // CHANGEMENT DE SOURCE AUDIO
  // ============================================
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = audioPlayer.isPlaying;
    audio.src = currentAudioSrc;
    audio.load();

    if (wasPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Auto-play prevented:", err.message);
        });
      }
    }
  }, [currentAudioSrc]);

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

  const enableAudio = useCallback(async () => {
    audioPlayer.seekTo(0);
    audioPlayer.play();
    setAudioStarted(true);
  }, [audioPlayer, setAudioStarted]);

  const selectVerse = useCallback((verseNumber) => {
    console.log(`[DEBUG] Manual select verse ${verseNumber}`);
    isSeekingRef.current = true;
    setCurrentVerse(verseNumber);

    const audio = audioRef.current;
    if (!audio || !audioPlayer.isReady) {
      console.log('[DEBUG] Audio not ready, just highlight');
      setTimeout(() => { isSeekingRef.current = false; }, 1000);
      return;
    }

    let seekTime = 0;

    if (timingState.timings?.length > 0) {
      // ✅ FIX : variable timing correctement assignée
      const timing = findTimingForVerse(timingState.timings, verseNumber);
      if (timing && Number.isFinite(timing.startMs)) {
        seekTime = timing.startMs / 1000;
      }
    }

    // Fallback proportionnel uniquement si pas de timing trouvé
    if (seekTime === 0 && audio.duration > 0) {
      const totalVerses = timingState.timings.length || remoteState.data?.ayahs?.length || verseNumber;
      seekTime = ((verseNumber - 1) / totalVerses) * audio.duration;
    }

    audioPlayer.seekTo(seekTime);

    if (!audioPlayer.isPlaying) {
      audioPlayer.play();
      setAudioStarted(true);
    }

    setTimeout(() => {
      isSeekingRef.current = false;
      console.log('[DEBUG] Seeking protection ended');
    }, 1000);
  }, [timingState.timings, remoteState.data?.ayahs, audioPlayer, audioRef, setCurrentVerse, setAudioStarted]);

  // Navigation entre sourates
  const goToPreviousSurah = useCallback(() => {
    if (currentSurahNumber > 1) {
      setCurrentSurahNumber(currentSurahNumber - 1);
      setCurrentVerse(1);
    }
  }, [currentSurahNumber, setCurrentSurahNumber, setCurrentVerse]);

  const goToNextSurah = useCallback(() => {
    if (currentSurahNumber < 114) {
      setCurrentSurahNumber(currentSurahNumber + 1);
      setCurrentVerse(1);
    }
  }, [currentSurahNumber, setCurrentSurahNumber, setCurrentVerse]);

  const handleSeek = useCallback((time) => {
    audioPlayer.seekTo(time);
  }, [audioPlayer]);

  const closeMiniPlayer = useCallback(() => {
    setAudioStarted(false);
    audioPlayer.pause();
  }, [audioPlayer]);

  // ============================================
  // PRELOAD - Charge le verset suivant pendant la lecture
  // ============================================
  useEffect(() => {
    if (!isPerVerseMode || !preloadAudioRef.current) return;

    const verses = remoteState.data?.ayahs || [];
    const nextVerse = currentVerse + 1;

    if (nextVerse <= verses.length && preloadedVerse !== nextVerse) {
      const nextUrl = getVerseAudioUrl(currentSurahNumber, nextVerse, selectedReciterId);
      preloadAudioRef.current.src = nextUrl;
      preloadAudioRef.current.load();
      setPreloadedVerse(nextVerse);
    }
  }, [isPerVerseMode, currentVerse, currentSurahNumber, selectedReciterId, remoteState.data, preloadedVerse]);

  // ============================================
  // GESTION FIN AUDIO
  // ============================================
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = async () => {
      if (!isPerVerseMode) return;

      const verses = remoteState.data?.ayahs || [];
      const nextVerse = currentVerse + 1;

      if (nextVerse <= verses.length) {
        const preloadAudio = preloadAudioRef.current;

        if (preloadAudio && preloadAudio.readyState >= 2 &&
            preloadAudio.src.includes(`${padSurah(nextVerse)}.mp3`)) {
          audio.src = preloadAudio.src;
          preloadAudio.src = "";
          setPreloadedVerse(null);
        } else {
          audio.src = getVerseAudioUrl(currentSurahNumber, nextVerse, selectedReciterId);
          audio.load();
        }

        setCurrentVerse(nextVerse);
        await audio.play();
      } else {
        if (currentSurahNumber < 114) {
          goToNextSurah();
        } else {
          setIsPerVerseMode(false);
          audioPlayer.pause();
        }
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [isPerVerseMode, currentVerse, currentSurahNumber, selectedReciterId, remoteState.data, audioPlayer, setCurrentVerse, goToNextSurah]);

  useEffect(() => {
    setPreloadedVerse(null);
    setIsPerVerseMode(false);
  }, [currentSurahNumber]);

  const toggleLoopVerseHandler = useCallback((verseNumber) => {
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
    navigator.mediaSession.setActionHandler("previoustrack", () => goToPreviousSurah());
    navigator.mediaSession.setActionHandler("nexttrack", () => goToNextSurah());

    return () => {
      navigator.mediaSession.setActionHandler("play", null);
      navigator.mediaSession.setActionHandler("pause", null);
      navigator.mediaSession.setActionHandler("previoustrack", null);
      navigator.mediaSession.setActionHandler("nexttrack", null);
    };
  }, [currentSurah.translit, currentVerse, selectedReciter.name, audioPlayer, goToPreviousSurah, goToNextSurah]);

  // ============================================
  // RENDU
  // ============================================
  return (
    <AppShell theme={theme} styles={styles}>
      <audio ref={audioRef} preload="auto" hidden />
      <audio ref={preloadAudioRef} preload="auto" hidden />

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
          totalVerses={remoteState.data?.ayahs?.length || 0}
          audioReady={audioPlayer.isReady}
          audioError={audioPlayer.error}
          isPlaying={audioPlayer.isPlaying}
          audioProgress={audioPlayer.getCurrentTime()}
          audioDuration={audioPlayer.duration}
          onEnableAudio={enableAudio}
          onTogglePlay={audioPlayer.togglePlay}
          onSeek={handleSeek}
          onOpenReading={() => setActiveTab("read")}
          onChangeReciter={changeReciter}
          onPreviousSurah={goToPreviousSurah}
          onNextSurah={goToNextSurah}
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
          readingMode={readingMode}
          setReadingMode={setReadingMode}
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
        totalVerses={remoteState.data?.ayahs?.length || 0}
        selectedReciter={selectedReciter}
        isPlaying={audioPlayer.isPlaying}
        audioReady={audioPlayer.isReady}
        audioError={audioPlayer.error}
        onOpen={() => setActiveTab("read")}
        onTogglePlay={audioPlayer.togglePlay}
        onClose={closeMiniPlayer}
        onPreviousSurah={goToPreviousSurah}
        onNextSurah={goToNextSurah}
        styles={styles}
        theme={theme}
      />

      <BottomNav activeTab={activeTab} onChange={setActiveTab} styles={styles} theme={theme} />
    </AppShell>
  );
}