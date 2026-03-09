import { StatusLight } from "./StatusLight";

/**
 * VerseCard - Carte de verset Coran Pro
 * Design premium pour l'affichage des versets
 * Supporte plusieurs modes d'affichage
 */
export function VerseCard({
  verse,
  active,
  glowEnabled,
  showPhonetic,
  showTranslation = true,
  language,
  onSelect,
  onToggleLoop,
  loopActive,
  repeatProgress,
  repeatTarget,
  styles,
  theme,
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(verse.numberInSurah)}
      style={{
        ...styles.verseCard,
        borderColor: active ? theme.accent : theme.border,
        background: active ? theme.accentSoft : theme.pageBg,
        color: theme.text,
        boxShadow: active && glowEnabled 
          ? `0 0 0 1px ${theme.accent} inset, 0 4px 20px ${theme.glow}` 
          : "0 2px 12px rgba(0,0,0,0.03)",
      }}
      aria-pressed={active}
    >
      {/* En-tête du verset */}
      <div style={styles.verseTopRow}>
        <div style={styles.verseTopLeft}>
          <span 
            style={{ 
              ...styles.verseBadge, 
              background: active ? theme.accent : theme.accentSoft,
              color: active ? "#fff" : theme.accentStrong,
            }}
          >
            {verse.numberInSurah}
          </span>
          <StatusLight active={active && glowEnabled} styles={styles} theme={theme} />
        </div>
        
        <div style={styles.verseTopActions}>
          {active && (
            <span style={{ ...styles.liveBadge, background: theme.accentGradient }}>
              ▶ En cours
            </span>
          )}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleLoop(verse.numberInSurah);
            }}
            style={{
              ...styles.loopChip,
              background: loopActive ? theme.accentSoft : "transparent",
              borderColor: loopActive ? theme.accent : theme.border,
              color: loopActive ? theme.accentStrong : theme.muted,
            }}
            aria-pressed={loopActive}
          >
            {loopActive ? `🔂 ${repeatProgress}/${repeatTarget}` : "🔁"}
          </button>
        </div>
      </div>

      {/* Texte arabe */}
      <div 
        dir="rtl" 
        style={{ 
          ...styles.verseArabic, 
          color: theme.text,
          fontFamily: '"Amiri", "Traditional Arabic", serif',
        }}
      >
        {verse.arabic}
      </div>

      {/* Phonétique (optionnel) */}
      {showPhonetic && verse.transliteration && (
        <div style={{ 
          ...styles.verseTransliteration, 
          color: theme.muted,
          fontStyle: "italic",
        }}>
          {verse.transliteration}
        </div>
      )}

      {/* Traduction (optionnelle) */}
      {showTranslation && verse.translations?.[language] && (
        <div style={{ 
          ...styles.verseTranslation, 
          color: theme.text,
          fontSize: 15,
          lineHeight: 1.7,
        }}>
          {verse.translations[language]}
        </div>
      )}
    </button>
  );
}

