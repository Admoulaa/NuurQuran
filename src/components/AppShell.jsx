export function AppShell({ children, theme, styles }) {
  return (
    <div style={{ ...styles.appBg, background: theme.appBg, color: theme.text }}>
      <div style={styles.container}>{children}</div>
    </div>
  );
}

