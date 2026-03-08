import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { ReciterCard } from "../ReciterCard";
import { RECITERS } from "../../data/constants";

export function PlayerPage({
  selectedReciter,
  currentSurah,
  currentVerse,
  audioReady,
  audioError,
  isPlaying,
  onEnableAudio,
  onTogglePlay,
  onOpenReading,
  onChangeReciter,
  timingAvailable,
  timingLoading,
  timingError,
  styles,
  theme,
}) {
  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Audio"
        title="Lecteur"
        description="Lecture audio du Coran avec suivi du verset."
        styles={styles}
        theme={theme}
      />

      <Card style={styles.playerHero} styles={styles} theme={theme}>
        <div>
          <div style={{ ...styles.playerHeroLabel, color: theme.accentStrong }}>Reprendre l'écoute</div>
          <div style={{ ...styles.playerHeroTitle, color: theme.text }}>{currentSurah.translit}</div>
          <div style={{ ...styles.playerHeroMeta, color: theme.muted }}>{selectedReciter.name} · verset {currentVerse}</div>
        </div>

        <div style={styles.playerActionsWrap}>
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
          <button type="button" onClick={onOpenReading} style={{ ...styles.secondaryButton, borderColor: theme.border, background: theme.pageBg, color: theme.text }}>
            Aller à la lecture
          </button>
        </div>

        <div style={{ ...styles.helperText, color: audioError ? "#b42318" : theme.muted }}>
          {audioError
            ? audioError
            : audioReady
            ? timingAvailable
              ? "Audio prêt · Suivi automatique du verset actif"
              : "Audio prêt · Suivi simple disponible"
            : timingLoading
            ? "Chargement des timings..."
            : timingError
            ? timingError
            : "Appuyez sur “Activer l'audio” pour lancer la lecture."}
        </div>
      </Card>

      <div style={styles.sectionHeader}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Récitateurs</h2>
      </div>
      <div style={styles.reciterGrid}>
        {RECITERS.map((reciter) => (
          <ReciterCard
            key={reciter.id}
            reciter={reciter}
            active={reciter.id === selectedReciter.id}
            onSelect={onChangeReciter}
            onPlay={(value) => {
              onChangeReciter(value);
              onEnableAudio(value);
            }}
            styles={styles}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

