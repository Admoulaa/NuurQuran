import { Card } from "./Card";

export function ReciterCard({ reciter, active, onSelect, onPlay, styles, theme }) {
  return (
    <Card style={styles.reciterCard} styles={styles} theme={theme}>
      <div style={styles.reciterCardTop}>
        <img src={reciter.photo} alt={reciter.name} style={styles.reciterImage} loading="lazy" />
        <div style={styles.reciterCardInfo}>
          <h3 style={{ ...styles.reciterName, color: theme.text }}>{reciter.name}</h3>
          <p style={{ ...styles.reciterDescription, color: theme.muted }}>{reciter.description}</p>
        </div>
      </div>
      <div style={styles.reciterActions}>
        <button
          type="button"
          onClick={() => onSelect(reciter)}
          aria-pressed={active}
          style={{
            ...styles.secondaryButton,
            borderColor: active ? theme.accent : theme.border,
            background: active ? theme.accentSoft : theme.pageBg,
            color: active ? theme.accentStrong : theme.text,
          }}
        >
          {active ? "Sélectionné" : "Choisir"}
        </button>
        <button type="button" onClick={() => onPlay(reciter)} style={{ ...styles.primaryButton, background: theme.accentGradient }}>
          Écouter
        </button>
      </div>
    </Card>
  );
}

