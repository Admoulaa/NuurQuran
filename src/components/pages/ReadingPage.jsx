import { useEffect, useMemo, useRef, useCallback, useState } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SurahCard } from "../SurahCard";
import { VerseCard } from "../VerseCard";
import { SURAHS } from "../../data/constants";
import { normalize, findTimingForVerse } from "../../utils/helpers";

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
  onTogglePlay,
  onEnableAudio,
  onOpenSurah,
  onSelectVerse,
  onToggleLoopVerse,
  loopVerse,
  loopProgress,
  verseRepeatCount,
  audioRef,
  styles,
  theme,
  readingMode,
  setReadingMode,
}) {
  const verseRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    const target = verseRefs.current[currentVerse];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentVerse, currentSurahNumber]);

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
  const isTrackActive = isPlaying && timingState.timings && timingState.timings.length > 0;

  const handleSelectVerse = useCallback((verseNumber) => {
    onSelectVerse(verseNumber);
  }, [onSelectVerse]);

  const isVerseActive = useCallback((verseNumber) => {
    return verseNumber === currentVerse;
  }, [currentVerse]);

  const shouldShowGlow = useCallback((verseNumber) => {
    return glowEnabled && isVerseActive(verseNumber) && isPlaying;
  }, [glowEnabled, isVerseActive, isPlaying]);

  const languages = [
    { value: "fr", label: "Français" },
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "ur", label: "اردو" },
    { value: "tr", label: "Türkçe" },
    { value: "id", label: "Indonesia" },
  ];

  const readingModes = [
    { id: "arabic", label: "Arabe", icon: "🕋" },
    { id: "translation", label: "Arabe + Trad", icon: "📜" },
    { id: "full", label: "Complet", icon: "✨" },
  ];

  return (
    <div style={styles.pageContent} ref={containerRef}>
      <PageHeader
        eyebrow="Lecture"
        title={currentSurah?.translit || "Lecture"}
        description={`${currentSurah?.fr || ""} · ${selectedReciter?.name || ""}`}
        styles={styles}
        theme={theme}
        action={
          <button
            type="button"
            onClick={() => onToggleBookmark(currentSurah?.number)}
            style={{
              ...styles.secondaryButton,
              borderColor: bookmarks?.includes(currentSurah?.number) ? theme.accent : theme.border,
              background: bookmarks?.includes(currentSurah?.number) ? theme.accentSoft : theme.pageBg,
              color: bookmarks?.includes(currentSurah?.number) ? theme.accentStrong : theme.text,
              padding: "8px 14px",
              fontSize: 13,
            }}
          >
            {bookmarks?.includes(currentSurah?.number) ? "★ Signet" : "☆ Ajouter"}
          </button>
        }
      />

      {/* Barre d'outils */}
      <Card styles={styles} theme={theme}>
        <div style={styles.readingToolbarGrid}>
          <div style={styles.fieldWrap}>
            <label htmlFor="surah-search" style={{ ...styles.label, color: theme.text }}>🔍 Recherche</label>
            <input
              id="surah-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nom, numéro ou arabe..."
              style={{ ...styles.input, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
            />
          </div>

          <div style={styles.fieldWrap}>
            <label htmlFor="surah-select" style={{ ...styles.label, color: theme.text }}>📖 Sourate</label>
            <select
              id="surah-select"
              value={currentSurahNumber}
              onChange={(e) => {
                setCurrentSurahNumber(Number(e.target.value));
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
            <label htmlFor="lang-select" style={{ ...styles.label, color: theme.text }}>🌐 Langue</label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{ ...styles.select, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label style={{ ...styles.label, color: theme.text, marginBottom: 10, display: "block" }}>
            📚 Mode de lecture
          </label>
          <div style={styles.readingModeSelector}>
            {readingModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setReadingMode(mode.id)}
                style={{
                  ...styles.readingModeButton,
                  ...(readingMode === mode.id ? styles.readingModeButtonActive : {}),
                  background: readingMode === mode.id ? theme.accentGradient : theme.pageBg,
                  borderColor: readingMode === mode.id ? "transparent" : theme.border,
                  color: readingMode === mode.id ? "#fff" : theme.text,
                }}
              >
                <span style={{ marginRight: 6 }}>{mode.icon}</span>
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {readingMode === "full" && (
          <div style={{ marginTop: 12 }}>
            <button
              type="button"
              onClick={() => setShowPhonetic(!showPhonetic)}
              style={{
                ...styles.secondaryButton,
                borderColor: theme.border,
                background: showPhonetic ? theme.accentSoft : theme.pageBg,
                color: showPhonetic ? theme.accentStrong : theme.text,
                fontSize: 13,
                padding: "8px 14px",
              }}
            >
              {showPhonetic ? "✓ Phonétique" : "○ Phonétique"}
            </button>
          </div>
        )}

        {/* Indicateur boucle active */}
        {loopVerse !== null && (
          <div style={{
            marginTop: 12,
            padding: "10px 14px",
            borderRadius: 10,
            background: theme.accentSoft,
            color: theme.accentStrong,
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            🔂 Boucle active — Verset {loopVerse} · {loopProgress + 1}/{verseRepeatCount} répétitions
          </div>
        )}
      </Card>

      {/* Résultats de recherche */}
      {search ? (
        <Card styles={styles} theme={theme}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Résultats</h2>
            <span style={{ ...styles.sectionMeta, color: theme.muted }}>
              {filteredSurahs.length} trouvé{filteredSurahs.length > 1 ? "s" : ""}
            </span>
          </div>
          <div style={styles.stack}>
            {filteredSurahs.slice(0, 24).map((surah) => (
              <SurahCard
                key={surah.number}
                item={surah}
                bookmarked={bookmarks?.includes(surah.number)}
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

      {/* En-tête sourate */}
      {!search && remoteState.data && (
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
                <h2 style={{ ...styles.sectionTitle, color: theme.text, margin: 0 }}>
                  {currentSurah?.translit}
                </h2>
              </div>
              <div style={{ ...styles.sectionMeta, color: theme.muted, marginTop: 4 }}>
                {currentSurah?.fr} · {currentSurah?.type}
              </div>
            </div>
            <div dir="rtl" style={{ ...styles.currentSurahArabic, color: theme.text, fontSize: 28 }}>
              {currentSurah?.arabic}
            </div>
          </div>
        </Card>
      )}

      {/* Chargement */}
      {remoteState.loading ? (
        <Card styles={styles} theme={theme}>
          <div style={{ ...styles.loadingBox, color: theme.muted, textAlign: "center", padding: 40 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            <div>Chargement de la sourate…</div>
          </div>
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
            const isLoopActive = loopVerse === verse.numberInSurah;

            return (
              <div
                key={verse.numberInSurah}
                ref={(node) => { verseRefs.current[verse.numberInSurah] = node; }}
              >
                <VerseCard
                  verse={verse}
                  active={isActive}
                  glowEnabled={showGlow}
                  showPhonetic={showPhonetic && readingMode === "full"}
                  showTranslation={readingMode !== "arabic"}
                  language={language}
                  onSelect={() => handleSelectVerse(verse.numberInSurah)}
                  onToggleLoop={onToggleLoopVerse}
                  loopActive={isLoopActive}
                  loopProgress={isLoopActive ? loopProgress : 0}
                  repeatTarget={verseRepeatCount}
                  styles={styles}
                  theme={theme}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Fin de la sourate */}
      {!search && remoteState.data && verses.length > 0 && (
        <Card styles={styles} theme={theme}>
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 24, color: theme.accentStrong, marginBottom: 8 }}>🤲</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: theme.text }}>
              Fin de {currentSurah?.translit}
            </div>
            <div style={{ fontSize: 14, color: theme.muted, marginTop: 8 }}>
              {verses.length} versets
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}