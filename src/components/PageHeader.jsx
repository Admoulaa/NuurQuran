export function PageHeader({ eyebrow, title, description, action, styles, theme }) {
  return (
    <header style={styles.pageHeader}>
      <div>
        {eyebrow ? <div style={{ ...styles.eyebrow, color: theme.accentStrong }}>{eyebrow}</div> : null}
        <h1 style={{ ...styles.pageTitle, color: theme.text }}>{title}</h1>
        {description ? <p style={{ ...styles.pageDescription, color: theme.muted }}>{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </header>
  );
}

