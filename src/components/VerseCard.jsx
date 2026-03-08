import { StatusLight } from "./StatusLight";

export function VerseCard({ verse, active, glowEnabled, showPhonetic, language, onSelect, onToggleLoop, loopActive, repeatProgress, repeatTarget, styles, theme }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(verse.numberInSurah)}
      style={{
        ...styles.verseCard,
        borderColor: active ? theme.accent : theme.border,
        background: theme.pageBg,
        color: theme.text,
        boxShadow: active && glowEnabled ? `0 0 0 1px ${theme.accent} inset, 0 0 22px ${theme.glow}, 0 14px 28px ${theme.verseGlow}` : active ? `0 0 0 1px ${theme.accent} inset, 0 14px 28px ${theme.verseGlow}` : "0 10px 24px rgba(15,23,42,0.03)",
      }}
      aria-pressed={active}
    >
      <div style={styles.verseTopRow}>
        <div style={styles.verseTopLeft}>
          <span style={{ ...styles.verseBadge, background: theme.accentSoft, color: theme.accentStrong }}>
            {verse.numberInSurah}
          </span>
          <StatusLight active={active && glowEnabled} styles={styles} theme={theme} />
        </div>
        <div style={styles.verseTopActions}>
          {active ? <span style={{ ...styles.liveBadge, background: theme.accentSoft, color: theme.accentStrong }}>En cours</span> : null}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleLoop(verse.numberInSurah);
            }}
            style={{
              ...styles.loopChip,
              background: loopActive ? theme.accentSoft : theme.pageBg,
              borderColor: loopActive ? theme.accent : theme.border,
              color: loopActive ? theme.accentStrong : theme.text,
            }}
            aria-pressed={loopActive}
          >
            {loopActive ? `Boucle ${repeatProgress}/${repeatTarget}` : "Boucler"}
          </button>
        </div>
      </div>

      <div dir="rtl" style={{ ...styles.verseArabic, color: theme.text }}>{verse.arabic}</div>

      {showPhonetic && verse.transliteration ? (
        <div style={{ ...styles.verseTransliteration, color: theme.muted }}>{verse.transliteration}</div>
      ) : null}

      <div style={{ ...styles.verseTranslation, color: theme.text }}>{verse.translations?.[language] || ""}</div>
    </button>
  );
}

