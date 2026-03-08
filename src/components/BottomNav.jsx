import { TABS } from "../data/constants";

export function BottomNav({ activeTab, onChange, styles, theme }) {
  return (
    <nav aria-label="Navigation principale" style={styles.bottomNavWrap}>
      <div style={{ ...styles.bottomNav, background: theme.pageBg, borderColor: theme.border }}>
        {TABS.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              aria-current={active ? "page" : undefined}
              style={{
                ...styles.bottomNavButton,
                color: active ? theme.accentStrong : theme.text,
                ...(active
                  ? {
                      ...styles.bottomNavButtonActive,
                      background: theme.accentSoft,
                      boxShadow: `0 0 0 1px ${theme.border} inset`,
                    }
                  : null),
              }}
            >
              <span aria-hidden="true" style={styles.bottomNavIcon}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

