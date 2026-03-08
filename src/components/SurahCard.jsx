import { StatusLight } from "./StatusLight";

export function SurahCard({ item, bookmarked, active, onOpen, onToggleBookmark, styles, theme, showLight = false }) {
  const medina = item.type === "Médine";

  return (
    <article
      style={{
        ...styles.surahCard,
        background: theme.pageBg,
        borderColor: active ? theme.accent : theme.border,
        boxShadow: active ? `0 0 0 1px ${theme.accent} inset, 0 12px 28px ${theme.verseGlow}` : "0 8px 18px rgba(15,23,42,0.03)",
      }}
    >
      <button type="button" onClick={() => onOpen(item.number)} style={styles.surahCardMain}>
        <div style={{ ...styles.surahIndex, background: theme.accentSoft, color: theme.accentStrong }}>
          {item.number}
        </div>
        <div style={styles.surahInfo}>
          <div style={{ ...styles.surahTitle, color: theme.text }}>{item.translit}</div>
          <div style={{ ...styles.surahMeta, color: theme.muted }}>
            <span>{item.fr}</span>
            <span
              style={{
                ...styles.badge,
                background: medina ? theme.successSoft : theme.accentSoft,
                color: medina ? theme.successText : theme.accentStrong,
              }}
            >
              {item.type}
            </span>
            {showLight ? <StatusLight active={active} styles={styles} theme={theme} /> : null}
          </div>
        </div>
        <div dir="rtl" style={{ ...styles.surahArabic, color: theme.text }}>{item.arabic}</div>
      </button>

      <button
        type="button"
        onClick={() => onToggleBookmark(item.number)}
        aria-label={bookmarked ? `Retirer ${item.translit} des signets` : `Ajouter ${item.translit} aux signets`}
        aria-pressed={bookmarked}
        style={{ ...styles.bookmarkButton, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
      >
        {bookmarked ? "★" : "☆"}
      </button>
    </article>
  );
}

