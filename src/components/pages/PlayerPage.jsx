import { useCallback, useRef, useState, useEffect } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { ReciterCard } from "../ReciterCard";
import { RECITERS } from "../../data/constants";

/**
 * PlayerPage - Grand Lecteur Premium
 * Design complet avec toutes les fonctionnalités audio
 */
export function PlayerPage({
  selectedReciter,
  currentSurah,
  currentVerse,
  totalVerses,
  audioReady,
  audioError,
  isPlaying,
  audioProgress,
  audioDuration,
  onEnableAudio,
  onTogglePlay,
  onSeek,
  onOpenReading,
  onChangeReciter,
  onPreviousSurah,
  onNextSurah,
  timingAvailable,
  timingLoading,
  timingError,
  styles,
  theme,
}) {
  const progressRef = useRef(null);

  // Format time helper
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculer le pourcentage de progression
  const progressPercent = audioDuration > 0 ? (audioProgress / audioDuration) * 100 : 0;

  // Gérer le clic sur la barre de progression
  const handleProgressClick = useCallback((e) => {
    if (!progressRef.current || !audioDuration || !onSeek) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.max(0, Math.min(1, clickX / width));
    const newTime = percent * audioDuration;
    
    onSeek(newTime);
  }, [audioDuration, onSeek]);

  // Fallback image
  const reciterImage = selectedReciter?.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=256`;

  // Sourate précédente/suivante
  const hasPrevious = currentSurah?.number > 1;
  const hasNext = currentSurah?.number < 114;

  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Audio"
        title="Lecteur"
        description="Écoutez le Coran avec votre récitateur préféré"
        styles={styles}
        theme={theme}
      />

      {/* Grand lecteur Premium */}
      <Card style={{ ...styles.playerHero, padding: 0, overflow: "hidden" }} styles={styles} theme={theme}>
        {/* Image de fond dégradé */}
        <div style={{
          height: 140,
          background: theme.hero,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
          }} />
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "grid",
            placeItems: "center",
            fontSize: 32,
            backdropFilter: "blur(8px)",
            border: "3px solid rgba(255,255,255,0.3)",
          }}>
            🎧
          </div>
        </div>

        {/* Contenu principal */}
        <div style={{ padding: 24 }}>
          {/* Image + Infos */}
          <div style={styles.playerHeroContent}>
            <img
              src={reciterImage}
              alt={selectedReciter?.name}
              style={styles.playerHeroImage}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=256`;
              }}
            />
            <div style={styles.playerHeroInfo}>
              <div style={{ ...styles.playerHeroLabel, color: theme.accentStrong }}>
                {timingAvailable ? "Suivi automatique" : "Lecture continue"}
              </div>
              <div style={{ ...styles.playerHeroTitle, color: theme.text }}>
                {currentSurah?.translit || "Al-Fatihah"}
              </div>
              <div style={{ ...styles.playerHeroMeta, color: theme.muted }}>
                {selectedReciter?.name || "Sélectionnez un récitateur"}
              </div>
              {currentVerse && (
                <div style={{ ...styles.playerHeroVerse, color: theme.accentStrong }}>
                  Verset {currentVerse} sur {totalVerses || "?"}
                </div>
              )}
            </div>
          </div>

          {/* Barre de progression */}
          <div style={styles.playerProgressWrap}>
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              style={{ 
                ...styles.playerProgressBar, 
                cursor: "pointer",
                height: 8,
              }}
              role="slider"
              aria-valuemin={0}
              aria-valuemax={audioDuration || 100}
              aria-valuenow={audioProgress || 0}
              tabIndex={0}
            >
              <div 
                style={{ 
                  ...styles.playerProgressFill, 
                  width: `${progressPercent}%`,
                }} 
              />
            </div>
            <div style={styles.playerProgressTime}>
              <span>{formatTime(audioProgress)}</span>
              <span>{formatTime(audioDuration)}</span>
            </div>
          </div>

          {/* Contrôles de lecture */}
          <div style={styles.playerControls}>
            {/* Précédent sourate */}
            <button
              type="button"
              onClick={onPreviousSurah}
              disabled={!hasPrevious}
              style={{
                ...styles.playerControlButton,
                ...styles.playerControlButtonSecondary,
                opacity: hasPrevious ? 1 : 0.4,
                cursor: hasPrevious ? "pointer" : "not-allowed",
              }}
              aria-label="Sourate précédente"
            >
              ⏮
            </button>

            {/* Bouton principal - utilise onTogglePlay pour pause/play */}
            <button
              type="button"
              onClick={onTogglePlay}
              disabled={!audioReady}
              style={{
                ...styles.playerControlButton,
                ...styles.playerControlButtonMain,
                width: 80,
                height: 80,
                fontSize: 28,
                opacity: audioReady ? 1 : 0.6,
              }}
              aria-label={isPlaying ? "Mettre en pause" : "Lancer la lecture"}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Suivant sourate */}
            <button
              type="button"
              onClick={onNextSurah}
              disabled={!hasNext}
              style={{
                ...styles.playerControlButton,
                ...styles.playerControlButtonSecondary,
                opacity: hasNext ? 1 : 0.4,
                cursor: hasNext ? "pointer" : "not-allowed",
              }}
              aria-label="Sourate suivante"
            >
              ⏭
            </button>
          </div>

          {/* Bouton activer audio (si pas prêt) */}
          {!audioReady && !audioError && (
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                type="button"
                onClick={onEnableAudio}
                style={{
                  ...styles.primaryButton,
                  background: theme.accentGradient,
                  padding: "12px 24px",
                }}
              >
                ▶ Activer l'audio
              </button>
            </div>
          )}

          {/* Bouton ouvrir lecture */}
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <button
              type="button"
              onClick={onOpenReading}
              style={{
                ...styles.secondaryButton,
                borderColor: theme.border,
                background: theme.pageBg,
                color: theme.text,
                padding: "10px 24px",
              }}
            >
              📖 Voir le texte
            </button>
          </div>

          {/* Statut audio */}
          <div style={{ 
            ...styles.playerHelperText, 
            background: audioError ? "#fef2f2" : theme.accentSoft,
            color: audioError ? "#b42318" : theme.accentStrong,
            borderRadius: 12,
            marginTop: 16,
          }}>
            {audioError
              ? `⚠️ ${audioError}`
              : timingLoading
              ? "⏳ Chargement des timings..."
              : timingAvailable
              ? "✓ Suivi automatique du verset actif"
              : "ℹ️ Timing non disponible pour cette sourate"}
          </div>
        </div>
      </Card>

      {/* Navigation rapide entre sourates */}
      <Card styles={styles} theme={theme}>
        <div style={styles.playerNav}>
          <button
            type="button"
            onClick={onPreviousSurah}
            disabled={!hasPrevious}
            style={{
              ...styles.playerNavButton,
              opacity: hasPrevious ? 1 : 0.4,
            }}
          >
            ← Précédent
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: theme.text }}>
              {currentSurah?.number || 1} / 114
            </div>
            <div style={{ fontSize: 12, color: theme.muted }}>
              {currentSurah?.fr || "Al-Fatihah"}
            </div>
          </div>
          <button
            type="button"
            onClick={onNextSurah}
            disabled={!hasNext}
            style={{
              ...styles.playerNavButton,
              opacity: hasNext ? 1 : 0.4,
            }}
          >
            Suivant →
          </button>
        </div>
      </Card>

      {/* Liste des récitateurs */}
      <div style={styles.sectionHeader}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Récitateurs</h2>
      </div>
      
      <div style={styles.reciterGrid}>
        {RECITERS.map((reciter) => (
          <ReciterCard
            key={reciter.id}
            reciter={reciter}
            active={reciter.id === selectedReciter?.id}
            onSelect={() => onChangeReciter(reciter)}
            onPlay={(value) => {
              onChangeReciter(value);
              onEnableAudio();
            }}
            styles={styles}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

