import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { LANGUAGES, THEMES } from "../../data/constants";

export function SettingsPage({
  language,
  setLanguage,
  themeId,
  setThemeId,
  verseRepeatCount,
  setVerseRepeatCount,
  glowEnabled,
  setGlowEnabled,
  showPhonetic,
  setShowPhonetic,
  resetLearning,
  styles,
  theme,
}) {
  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Personnalisation"
        title="Paramètres"
        description="Changez l'ambiance visuelle et adaptez l'apprentissage à votre rythme."
        styles={styles}
        theme={theme}
      />

      <Card styles={styles} theme={theme}>
        <div style={styles.sectionHeader}>
          <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Thème</h2>
        </div>
        <div style={styles.themeGrid}>
          {Object.values(THEMES).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setThemeId(option.id)}
              style={{
                ...styles.themeCard,
                borderColor: themeId === option.id ? option.accent : theme.border,
                background: option.appBg,
                boxShadow: themeId === option.id ? `0 0 0 1px ${option.accent} inset, 0 12px 30px ${option.verseGlow}` : "none",
              }}
            >
              <div style={{ ...styles.themePreview, background: option.hero }} />
              <strong style={{ color: option.text }}>{option.name}</strong>
            </button>
          ))}
        </div>
      </Card>

      <Card styles={styles} theme={theme}>
        <div style={styles.sectionHeader}>
          <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Lecture et apprentissage</h2>
        </div>

        <div style={styles.settingsGroup}>
          <label htmlFor="settings-language" style={{ ...styles.label, color: theme.text }}>Langue par défaut</label>
          <select
            id="settings-language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            style={{ ...styles.select, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
          >
            {Object.entries(LANGUAGES).map(([key, value]) => (
              <option key={key} value={key}>{value.label}</option>
            ))}
          </select>
        </div>

        <div style={styles.settingsGroup}>
          <div style={styles.settingsRow}>
            <label htmlFor="repeat-count" style={{ ...styles.label, color: theme.text }}>Nombre de répétitions par verset</label>
            <span style={{ ...styles.settingsValue, color: theme.accentStrong }}>{verseRepeatCount}x</span>
          </div>
          <input
            id="repeat-count"
            type="range"
            min={1}
            max={10}
            step={1}
            value={verseRepeatCount}
            onChange={(event) => setVerseRepeatCount(Number(event.target.value))}
            style={styles.rangeInput}
          />
        </div>

        <div style={styles.settingsSwitchList}>
          <button
            type="button"
            onClick={() => setGlowEnabled((prev) => !prev)}
            style={{ ...styles.toggleRow, borderColor: theme.border, background: theme.pageBg }}
          >
            <div>
              <strong style={{ color: theme.text }}>Lumière de suivi</strong>
              <div style={{ ...styles.toggleHint, color: theme.muted }}>Met en évidence la sourate et le verset en cours de récitation.</div>
            </div>
            <span style={{ ...styles.togglePill, background: glowEnabled ? theme.accentGradient : theme.border }} />
          </button>

          <button
            type="button"
            onClick={() => setShowPhonetic((prev) => !prev)}
            style={{ ...styles.toggleRow, borderColor: theme.border, background: theme.pageBg }}
          >
            <div>
              <strong style={{ color: theme.text }}>Translittération par défaut</strong>
              <div style={{ ...styles.toggleHint, color: theme.muted }}>Affiche ou masque la translittération dans la lecture.</div>
            </div>
            <span style={{ ...styles.togglePill, background: showPhonetic ? theme.accentGradient : theme.border }} />
          </button>
        </div>

        <div style={styles.settingsActions}>
          <button type="button" onClick={resetLearning} style={{ ...styles.secondaryButton, borderColor: theme.border, background: theme.pageBg, color: theme.text }}>
            Réinitialiser la boucle d'apprentissage
          </button>
        </div>
      </Card>
    </div>
  );
}

