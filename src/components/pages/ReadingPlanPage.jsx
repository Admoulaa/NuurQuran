import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SURAHS, READING_PLAN } from "../../data/constants";

export function ReadingPlanPage({ onOpenSurah, styles, theme }) {
  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Parcours"
        title="Programmes de lecture"
        description="Des entrées thématiques et progressives pour lire avec constance."
        styles={styles}
        theme={theme}
      />
      <div style={styles.stack}>
        {READING_PLAN.map((plan) => (
          <Card key={plan.id} styles={styles} theme={theme}>
            <div style={styles.planHeader}>
              <div>
                <h2 style={{ ...styles.sectionTitle, color: theme.text }}>{plan.title}</h2>
                <p style={{ ...styles.pageDescription, color: theme.muted }}>{plan.description}</p>
              </div>
              <span style={{ ...styles.badge, background: theme.accentSoft, color: theme.accentStrong }}>{plan.surahs.length} sourate{plan.surahs.length > 1 ? "s" : ""}</span>
            </div>
            <div style={styles.planActions}>
              {plan.surahs.map((surahNumber) => {
                const surah = SURAHS.find((item) => item.number === surahNumber);
                if (!surah) return null;
                return (
                  <button key={surah.number} type="button" onClick={() => onOpenSurah(surah.number)} style={{ ...styles.planChip, borderColor: theme.border, background: theme.pageBg, color: theme.text }}>
                    {surah.number}. {surah.translit}
                  </button>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

