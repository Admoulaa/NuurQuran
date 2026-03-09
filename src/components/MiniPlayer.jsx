/**
 * MiniPlayer - Mini lecteur premium synchronisé
 * Version compacte du grand lecteur avec les mêmes fonctionnalités essentielles
 * Synchronisé avec le grand lecteur via props
 */
export function MiniPlayer({
  visible,
  currentSurah,
  currentVerse,
  totalVerses,
  selectedReciter,
  isPlaying,
  audioReady,
  audioError,
  onOpen,
  onTogglePlay,
  onClose,
  onPreviousSurah,
  onNextSurah,
  styles,
  theme,
}) {
  if (!visible) return null;

  // Fallback image si nécessaire
  const reciterImage = selectedReciter?.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=128`;

  return (
    <div style={styles.miniPlayerWrap}>
      <div style={{ 
        ...styles.miniPlayer, 
        background: theme.pageBg, 
        borderColor: theme.border 
      }}>
        {/* Image récitant */}
        <img
          src={reciterImage}
          alt={selectedReciter?.name}
          style={styles.miniPlayerImage}
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter?.name || "R")}&background=8b5e34&color=fff&size=128`;
          }}
        />

        {/* Infos principales - clic pour ouvrir */}
        <button 
          type="button" 
          onClick={onOpen} 
          style={{
            ...styles.miniPlayerMain,
            flex: 1,
            minWidth: 0,
          }}
        >
          <div style={{ 
            ...styles.miniPlayerEyebrow, 
            color: theme.accentStrong 
          }}>
            {isPlaying ? "▶ Lecture" : "⏸ En pause"}
          </div>
          <div style={{ 
            ...styles.miniPlayerTitle, 
            color: theme.text 
          }}>
            {currentSurah?.translit || "Sourate"}
          </div>
          <div style={{ 
            ...styles.miniPlayerMeta, 
            color: theme.muted 
          }}>
            {selectedReciter?.name || "Récitant"} · V.{currentVerse}/{totalVerses || "?"}
          </div>
        </button>

        {/* Contrôles */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Bouton Previous */}
          {onPreviousSurah && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPreviousSurah();
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "none",
                background: "transparent",
                color: theme.muted,
                fontSize: 14,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
              aria-label="Sourate précédente"
            >
              ⏮
            </button>
          )}

          {/* Bouton Play/Pause */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onTogglePlay();
            }}
            disabled={!audioReady}
            aria-label={isPlaying ? "Mettre en pause" : "Lancer la lecture"}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: audioReady ? theme.accentGradient : theme.border,
              color: "#fff",
              fontSize: 16,
              cursor: audioReady ? "pointer" : "not-allowed",
              opacity: audioReady ? 1 : 0.5,
              display: "grid",
              placeItems: "center",
              boxShadow: audioReady ? "0 4px 12px rgba(139, 94, 52, 0.25)" : "none",
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          {/* Bouton Next */}
          {onNextSurah && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNextSurah();
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "none",
                background: "transparent",
                color: theme.muted,
                fontSize: 14,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
              aria-label="Sourate suivante"
            >
              ⏭
            </button>
          )}

          {/* Bouton fermer */}
          {onClose && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: `1px solid ${theme.border}`,
                background: "transparent",
                color: theme.muted,
                fontSize: 14,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
              aria-label="Fermer"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

