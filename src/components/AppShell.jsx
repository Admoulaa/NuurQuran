const RESET_CSS = `
  *, *::before, *::after {
    box-sizing: border-box;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: 1;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    vertical-align: middle;
    -webkit-appearance: none;
    appearance: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

export function AppShell({ children, theme, styles }) {
  return (
    <>
      <style>{RESET_CSS}</style>
      <div style={{ ...styles.appBg, background: theme.appBg, color: theme.text }}>
        <div style={styles.container}>{children}</div>
      </div>
    </>
  );
}