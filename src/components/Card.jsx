export function Card({ children, style, styles, theme }) {
  return (
    <section
      style={{
        ...styles.card,
        background: theme.pageBg,
        borderColor: theme.border,
        boxShadow: theme.shadow,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

