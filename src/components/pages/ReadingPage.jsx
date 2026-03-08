import { useEffect, useMemo, useRef, useCallback } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SurahCard } from "../SurahCard";
import { VerseCard } from "../VerseCard";
import { SURAHS } from "../../data/constants";
import { normalize, getTimingForVerse } from "../../utils/helpers";

export function ReadingPage({
  currentSurah,
  currentSurahNumber,
  setCurrentSurahNumber,
  currentVerse,
  setCurrentVerse,
  language,
  setLanguage,
  showPhonetic,
  setShowPhonetic,
  search,
  setSearch,
  bookmarks,
  onToggleBookmark,
  remoteState,
  selectedReciter,
  isPlaying,
  audioReady,
  audioError,
  timingState,
  glowEnabled,
  loopMode,
  loopTargetVerse,
  repeatProgress,
  repeatTarget,
  onTogglePlay,
  onEnableAudio,
  onOpenSurah,
  onSelectVerse,
  onToggleLoopVerse,
  audioRef,
  styles,
  theme,
}) {
  const verseRefs = useRef({});
  const isSeekingRef = useRef(false);

  // Scroll vers le verset actif
  useEffect(() => {
    const target = verseRefs.current[currentVerse];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentVerse, currentSurahNumber]);

  // Filtrer les sourates pour la recherche
  const filteredSurahs = useMemo(() => {
    const query = normalize(search);
    if (!query) return SURAHS;
    return SURAHS.filter(
      (surah) =>
        normalize(surah.translit).includes(query) ||
        normalize(surah.fr).includes(query) ||
        String(surah.number).includes(query) ||
        surah.arabic.includes(search)
    );
  }, [search]);

  const verses = remoteState.data?.ayahs || [];

  // Déterminer si le suivi visuel doit être actif
  const isTrackActive = isPlaying && timingState.timings && timingState.timings.length > 0;

  // Handle select verse
  const handleSelectVerse = useCallback((verseNumber) => {
    isSeekingRef.current = true;
    onSelectVerse(verseNumber);
    
    const audio = audioRef?.current;
    if (audio) {
      const exactTiming = getTimingForVerse(timingState.timings, verseNumber);
      if (exactTiming) {
        audio.currentTime = exactTiming.startMs / 1000;
      } else if (audio.duration && verses.length) {
        audio.currentTime = ((verseNumber - 1) / verses.length) * audio.duration;
      }
    }
    
    setTimeout(() => {
      isSeekingRef.current = false;
    }, 500);
  }, [onSelectVerse, timingState.timings, audioRef, verses.length]);

  // Déterminer si un verset doit être mis en évidence
  const isVerseActive = useCallback((verseNumber) => {
    if (isSeekingRef.current) {
      return verseNumber === currentVerse;
    }
    return verseNumber === currentVerse;
  }, [currentVerse]);

  // Déterminer si le glow doit être affiché
  const shouldShowGlow = useCallback((verseNumber) => {
    return glowEnabled && isVerseActive(verseNumber) && isPlaying;
  }, [glowEnabled, isVerseActive, isPlaying]);

  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Lecture"
        title={currentSurah.translit}
        description={`${currentSurah.fr} · ${selectedReciter.name}`}
        styles={styles}
        theme={theme}
        action={
          <button
            type="button"
            onClick={() => onToggleBookmark(currentSurah.number)}
            style={{
              ...styles.secondaryButton,
              borderColor: bookmarks.includes(currentSurah.number) ? theme.accent : theme.border,
              background: bookmarks.includes(currentSurah.number) ? theme.accentSoft : theme.pageBg,
              color: bookmarks.includes(currentSurah.number) ? theme.accentStrong : theme.text,
            }}
          >
            {bookmarks.includes(currentSurah.number) ? "Retirer le signet" : "Ajouter aux signets"}
          </button>
        }
      />

      <Card styles={styles} theme={theme}>
        <div style={styles.readingToolbarGrid}>
          <div style={styles.fieldWrap}>
            <label htmlFor="surah-search" style={{ ...styles.label, color: theme.text }}>Recherche de sourate</label>
            <input
              id="surah-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Nom, numéro ou arabe..."
              style={{ ...styles.input, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
            />
          </div>

          <div style={styles.fieldWrap}>
            <label htmlFor="surah-select" style={{ ...styles.label, color: theme.text }}>Sourate</label>
            <select
              id="surah-select"
              value={currentSurahNumber}
              onChange={(event) => {
                setCurrentSurahNumber(Number(event.target.value));
                setCurrentVerse(1);
              }}
              style={{ ...styles.select, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
            >
              {SURAHS.map((surah) => (
                <option key={surah.number} value={surah.number}>
                  {surah.number}. {surah.translit}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.fieldWrap}>
            <label htmlFor="lang-select" style={{ ...styles.label, color: theme.text }}>Langue</label>
            <select
              id="lang-select"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              style={{ ...styles.select, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
            >
              {Object.entries({ fr: { label: "Français" }, en: { label: "English" }, es: { label: "Español" }, ur: { label: "اردو" }, tr: { label: "Türkçe" }, id: { label: "Indonesia" } }).map(([key, value]) => (
                <option key={key} value={key}>{value.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={styles.readingActions}>
          <button type="button" onClick={() => setShowPhonetic((prev) => !prev)} style={{ ...styles.secondaryButton, borderColor: theme.border, background: theme.pageBg, color: theme.text }}>
            {showPhonetic ? "Masquer la translittération" : "Afficher la translittération"}
          </button>
          <button type="button" onClick={onEnableAudio} style={{ ...styles.primaryButton, background: theme.accentGradient }}>
            Activer l'audio
          </button>
          <button
            type="button"
            onClick={onTogglePlay}
            disabled={!audioReady || Boolean(audioError)}
            style={{ ...styles.secondaryButton, borderColor: theme.border, background: theme.pageBg, color: theme.text, ...((!audioReady || audioError) ? styles.buttonDisabled : null) }}
          >
            {isPlaying ? "Pause" : "Lecture"}
          </button>
        </div>

        <div style={{ ...styles.helperText, color: audioError ? "#b42318" : theme.muted }}>
          {audioError
            ? audioError
            : timingState.loading
            ? "Chargement du suivi verset par verset..."
            : timingState.timings && timingState.timings.length
            ? "Suivi automatique actif - Lecture continue segmentée"
            : timingState.error || "Suivi simple disponible pour cette sourate."}
        </div>
      </Card>

      {search ? (
        <Card styles={styles} theme={theme}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Résultats</h2>
            <span style={{ ...styles.sectionMeta, color: theme.muted }}>{filteredSurahs.length} trouvé{filteredSurahs.length > 1 ? "s" : ""}</span>
          </div>
          <div style={styles.stack}>
            {filteredSurahs.slice(0, 24).map((surah) => (
              <SurahCard
                key={surah.number}
                item={surah}
                bookmarked={bookmarks.includes(surah.number)}
                active={surah.number === currentSurahNumber}
                onOpen={onOpenSurah}
                onToggleBookmark={onToggleBookmark}
                styles={styles}
                theme={theme}
                showLight={glowEnabled && surah.number === currentSurahNumber && isTrackActive}
              />
            ))}
          </div>
        </Card>
      ) : null}

      <Card styles={styles} theme={theme}>
        <div style={styles.surahSummaryTop}>
          <div>
            <div style={styles.currentSurahTitleWrap}>
              <span
                aria-hidden="true"
                style={{
                  ...styles.statusLight,
                  background: isTrackActive ? theme.accent : theme.border,
                  boxShadow: isTrackActive && glowEnabled ? `0 0 0 4px ${theme.verseGlow}, 0 0 18px ${theme.glow}` : "none",
                }}
              />
              <h2 style={{ ...styles.sectionTitle, color: theme.text }}>{currentSurah.translit}</h2>
            </div>
            <div style={{ ...styles.sectionMeta, color: theme.muted }}>{currentSurah.fr}</div>
          </div>
          <div dir="rtl" style={{ ...styles.currentSurahArabic, color: theme.text }}>{currentSurah.arabic}</div>
        </div>
      </Card>

      {remoteState.loading ? (
        <Card styles={styles} theme={theme}>
          <div style={{ ...styles.loadingBox, color: theme.muted }}>Chargement de la sourate…</div>
        </Card>
      ) : remoteState.error ? (
        <Card styles={styles} theme={theme}>
          <div style={styles.errorBox}>
            <strong>Chargement impossible</strong>
            <p style={styles.errorText}>{remoteState.error}</p>
          </div>
        </Card>
      ) : (
        <div style={styles.stack}>
          {verses.map((verse) => {
            const isActive = isVerseActive(verse.numberInSurah);
            const showGlow = shouldShowGlow(verse.numberInSurah);
            
            return (
              <div
                key={verse.numberInSurah}
                ref={(node) => {
                  verseRefs.current[verse.numberInSurah] = node;
                }}
              >
                <VerseCard
                  verse={verse}
                  active={isActive}
                  glowEnabled={showGlow}
                  showPhonetic={showPhonetic}
                  language={language}
                  onSelect={() => handleSelectVerse(verse.numberInSurah)}
                  onToggleLoop={(event) => {
                    event.stopPropagation();
                    onToggleLoopVerse(verse.numberInSurah);
                  }}
                  loopActive={loopMode && loopTargetVerse === verse.numberInSurah}
                  repeatProgress={repeatProgress}
                  repeatTarget={repeatTarget}
                  styles={styles}
                  theme={theme}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

