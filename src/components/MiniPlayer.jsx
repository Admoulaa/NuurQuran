export function MiniPlayer({
  visible,
  currentSurah,
  currentVerse,
  selectedReciter,
  isPlaying,
  audioReady,
  audioError,
  onOpen,
  onTogglePlay,
  styles,
  theme,
}) {
  if (!visible) return null;

  return (
    <div style={styles.miniPlayerWrap}>
      <div style={{ ...styles.miniPlayer, background: theme.pageBg, borderColor: theme.border }}>
        <button type="button" onClick={onOpen} style={styles.miniPlayerMain}>
          <div style={{ ...styles.miniPlayerEyebrow, color: theme.accentStrong }}>Lecture en cours</div>
          <div style={{ ...styles.miniPlayerTitle, color: theme.text }}>{currentSurah.translit}</div>
          <div style={{ ...styles.miniPlayerMeta, color: theme.muted }}>
            {selectedReciter.name} · verset {currentVerse}
          </div>
        </button>

        <button type="button" onClick={onOpen} style={{ ...styles.secondaryButton, borderColor: theme.border, color: theme.text, background: theme.pageBg }}>
          Ouvrir
        </button>

        <button
          type="button"
          onClick={onTogglePlay}
          disabled={!audioReady || Boolean(audioError)}
          aria-label={isPlaying ? "Mettre en pause" : "Lancer la lecture"}
          style={{
            ...styles.iconButtonDark,
            background: theme.accentGradient,
            ...((!audioReady || audioError) ? styles.buttonDisabled : null),
          }}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}

