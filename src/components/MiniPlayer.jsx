export function MiniPlayer({
  visible,
  currentSurah,
  currentVerse,
  totalVerses,
  selectedReciter,
  isPlaying,
  audioReady,
  onOpen,
  onTogglePlay,
  onClose,
  onPreviousSurah,
  onNextSurah,
  styles,
  theme,
}) {
  if (!visible) return null;

  const reciterImage = selectedReciter?.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=128`;

  const btnCircle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    lineHeight: 1,
    flexShrink: 0,
    boxSizing: "border-box",
    fontFamily: "inherit",
    border: "none",
    background: "transparent",
    borderRadius: "50%",
    width: 32,
    height: 32,
    color: theme.muted,
    fontSize: 14,
  };

  return (
    <div style={styles.miniPlayerWrap}>
      <div style={{
        ...styles.miniPlayer,
        background: theme.pageBg,
        borderColor: theme.border,
        alignItems: "center",
        minHeight: 64,
      }}>
        <img
          src={reciterImage}
          alt={selectedReciter?.name}
          style={{ ...styles.miniPlayerImage, flexShrink: 0, alignSelf: "center" }}
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=128`;
          }}
        />

        <button
          type="button"
          onClick={onOpen}
          style={{ ...styles.miniPlayerMain, flex: 1, minWidth: 0 }}
        >
          <div style={{ ...styles.miniPlayerEyebrow, color: theme.accentStrong }}>
            {isPlaying ? "▶ Lecture" : "⏸ En pause"}
          </div>
          <div style={{ ...styles.miniPlayerTitle, color: theme.text }}>
            {currentSurah?.translit || "Sourate"}
          </div>
          <div style={{ ...styles.miniPlayerMeta, color: theme.muted }}>
            {selectedReciter?.name || "Récitant"} · V.{currentVerse}/{totalVerses || "?"}
          </div>
        </button>

        {/* Contrôles — hauteur fixe, tous centrés */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          flexShrink: 0,
          alignSelf: "center",
        }}>
          <button type="button" onClick={(e) => { e.stopPropagation(); onPreviousSurah?.(); }} style={btnCircle} aria-label="Précédent">⏮</button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onTogglePlay(); }}
            disabled={!audioReady}
            aria-label={isPlaying ? "Pause" : "Lecture"}
            style={{
              ...btnCircle,
              width: 40,
              height: 40,
              border: "none",
              background: audioReady ? theme.accentGradient : theme.border,
              color: "#fff",
              fontSize: 15,
              cursor: audioReady ? "pointer" : "not-allowed",
              opacity: audioReady ? 1 : 0.5,
              boxShadow: audioReady ? "0 4px 12px rgba(139,94,52,0.25)" : "none",
            }}
          >{isPlaying ? "⏸" : "▶"}</button>

          <button type="button" onClick={(e) => { e.stopPropagation(); onNextSurah?.(); }} style={btnCircle} aria-label="Suivant">⏭</button>

          {/* ✕ — même hauteur que les autres, outline au lieu de border pour éviter le décalage */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Fermer"
            style={{
              ...btnCircle,
              width: 28,
              height: 28,
              borderRadius: 8,
              border: "none",
              outline: `1px solid ${theme.border}`,
              outlineOffset: "-1px",
              background: "transparent",
              color: theme.muted,
              fontSize: 12,
            }}
          >✕</button>
        </div>
      </div>
    </div>
  );
}