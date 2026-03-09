import { useState } from "react";
import { Card } from "./Card";

/**
 * ReciterCard - Carte de récitant avec image
 * Avec fallback si l'image ne charge pas
 * Affiche un indicateur pour les récitants supportant le mode verset par verset
 */
export function ReciterCard({ reciter, active, onSelect, onPlay, styles, theme }) {
  const [imageError, setImageError] = useState(false);

  // Fallback image
  const imageSrc = imageError 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(reciter.name)}&background=8b5e34&color=fff&size=128&font-size=0.3`
    : reciter.photo;

  // Déterminer le type de support audio
  // Un récitant est en mode per-verse seulement s'il a hasPerVerse ET des timingAliases
  const hasPerVerse = reciter.hasPerVerse && reciter.timingAliases && reciter.timingAliases.length > 0;
  const modeLabel = hasPerVerse ? "Verset par verset" : "Sourate complète";
  const modeColor = hasPerVerse ? theme.successText : theme.muted;
  const modeBg = hasPerVerse ? theme.successSoft : theme.accentSoft;

  return (
    <Card 
      style={{ 
        ...styles.reciterCard, 
        ...(active ? styles.reciterCardActive : {}),
        borderColor: active ? theme.accent : theme.border,
        background: active ? theme.accentSoft : theme.pageBg,
      }} 
      styles={styles} 
      theme={theme}
    >
      <div style={styles.reciterCardTop}>
        <img 
          src={imageSrc} 
          alt={reciter.name} 
          style={styles.reciterImage} 
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div style={styles.reciterCardInfo}>
          <h3 style={{ ...styles.reciterName, color: theme.text }}>{reciter.name}</h3>
          <p style={{ ...styles.reciterDescription, color: theme.muted }}>{reciter.description}</p>
          {/* Indicateur de mode audio */}
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 4,
            marginTop: 6,
            padding: "4px 8px",
            borderRadius: 6,
            background: modeBg,
            fontSize: 11,
            color: modeColor,
            fontWeight: 500,
          }}>
            {hasPerVerse ? "✨" : "📖"} {modeLabel}
          </div>
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
            padding: "10px 16px",
            fontSize: 14,
          }}
        >
          {active ? "✓ Sélectionné" : "Choisir"}
        </button>
        <button 
          type="button" 
          onClick={() => onPlay(reciter)} 
          style={{ 
            ...styles.primaryButton, 
            background: theme.accentGradient,
            padding: "10px 16px",
            fontSize: 14,
          }}
        >
          ▶ Écouter
        </button>
      </div>
    </Card>
  );
}
