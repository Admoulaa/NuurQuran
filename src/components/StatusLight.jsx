export function StatusLight({ active, styles, theme }) {
  return (
    <span
      aria-hidden="true"
      style={{
        ...styles.statusLight,
        background: active ? theme.accent : theme.border,
        boxShadow: active ? `0 0 0 4px ${theme.verseGlow}, 0 0 18px ${theme.glow}` : "none",
      }}
    />
  );
}

