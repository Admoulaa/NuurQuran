import { StatusLight } from "./StatusLight";

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
  loopProgress,
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
        borderColor: active ? theme.accent : loopActive ? theme.accentStrong : theme.border,
        background: active ? theme.accentSoft : loopActive ? theme.successSoft : theme.pageBg,
        color: theme.text,
        boxShadow: active && glowEnabled
          ? `0 0 0 1px ${theme.accent} inset, 0 4px 20px ${theme.glow}`
          : "0 2px 12px rgba(0,0,0,0.03)",
      }}
      aria-pressed={active}
    >
      {/* En-tête */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginBottom: 8,
      }}>
        {/* Gauche : badge + point */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <span style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 13,
            lineHeight: 1,
            flexShrink: 0,
            background: active ? theme.accent : theme.accentSoft,
            color: active ? "#fff" : theme.accentStrong,
          }}>
            {verse.numberInSurah}
          </span>
          <StatusLight active={active && glowEnabled} styles={styles} theme={theme} />
        </div>

        {/* Droite : badges + bouton boucle */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {active && (
            <span style={{
              padding: "4px 10px",
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 11,
              background: theme.accentGradient,
              color: "#fff",
              lineHeight: 1,
            }}>
              ▶ En cours
            </span>
          )}

          {/* Bouton boucle — affiche progression si actif */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleLoop(verse.numberInSurah);
            }}
            style={{
              borderRadius: 6,
              padding: "5px 10px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 12,
              border: `1px solid ${loopActive ? theme.accentStrong : theme.border}`,
              background: loopActive ? theme.accentSoft : "transparent",
              color: loopActive ? theme.accentStrong : theme.muted,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 4,
              whiteSpace: "nowrap",
            }}
            aria-pressed={loopActive}
            title={loopActive ? `Boucle active : ${loopProgress + 1}/${repeatTarget}` : `Répéter ce verset ${repeatTarget} fois`}
          >
            {loopActive ? (
              <>
                🔂
                <span style={{
                  background: theme.accent,
                  color: "#fff",
                  borderRadius: 4,
                  padding: "1px 5px",
                  fontSize: 11,
                  fontWeight: 700,
                }}>
{loopProgress}/{repeatTarget}                </span>
              </>
            ) : "🔁"}
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

      {/* Phonétique */}
      {showPhonetic && verse.transliteration && (
        <div style={{ ...styles.verseTransliteration, color: theme.muted, fontStyle: "italic" }}>
          {verse.transliteration}
        </div>
      )}

      {/* Traduction */}
      {showTranslation && verse.translations?.[language] && (
        <div style={{ ...styles.verseTranslation, color: theme.text, fontSize: 15, lineHeight: 1.7 }}>
          {verse.translations[language]}
        </div>
      )}
    </button>
  );
}