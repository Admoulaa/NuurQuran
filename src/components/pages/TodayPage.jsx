import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SurahCard } from "../SurahCard";
import { RECOMMENDED_SURAHS, SURAHS } from "../../data/constants";
import { getDailyAyah } from "../../utils/helpers";

export function TodayPage({ onOpenSurah, onGoPlayer, dailyAyah, styles, theme }) {
  const recommendations = RECOMMENDED_SURAHS.map((number) =>
    SURAHS.find((surah) => surah.number === number)
  ).filter(Boolean);

  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Bienvenue"
        title="Votre espace Coran"
        description="Lecture, écoute, progression et apprentissage dans une interface plus souple et personnalisable."
        styles={styles}
        theme={theme}
        action={
          <button type="button" onClick={onGoPlayer} style={{ ...styles.primaryButton, background: theme.accentGradient }}>
            Ouvrir le lecteur
          </button>
        }
      />

      <section style={{ ...styles.heroCard, background: theme.hero }}>
        <div>
          <div dir="rtl" style={styles.heroArabic}>السلام عليكم</div>
          <p style={styles.heroText}>Que la paix soit sur vous.</p>
        </div>
        <div style={styles.heroStats}>
          <strong style={styles.heroStatsNumber}>114</strong>
          <span>Sourates</span>
          <span>Coran</span>
        </div>
      </section>

      <Card styles={styles} theme={theme}>
        <div style={{ ...styles.sectionTag, color: theme.accentStrong }}>Verset du moment</div>
        <div dir="rtl" style={{ ...styles.ayahArabic, color: theme.text }}>{dailyAyah.arabic}</div>
        <p style={{ ...styles.ayahTranslation, color: theme.text }}>{dailyAyah.translation}</p>
        <div style={{ ...styles.ayahRef, color: theme.accentStrong }}>{dailyAyah.ref}</div>
      </Card>

      <div style={styles.sectionHeader}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Accès rapide</h2>
      </div>
      <div style={styles.quickGrid}>
        <button type="button" onClick={onGoPlayer} style={{ ...styles.quickAction, ...styles.quickActionPrimary, background: theme.accentGradient }}>
          <span style={styles.quickActionEmoji}>🎧</span>
          <strong>Lecteur audio</strong>
          <span>Choisir un récitateur et reprendre la lecture</span>
        </button>
        <button type="button" onClick={() => onOpenSurah(1)} style={{ ...styles.quickAction, borderColor: theme.border, color: theme.text, background: theme.pageBg }}>
          <span style={styles.quickActionEmoji}>📖</span>
          <strong>Commencer par Al-Fatihah</strong>
          <span>Accéder au texte, à la translittération et aux traductions</span>
        </button>
      </div>

      <div style={styles.sectionHeader}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Sourates recommandées</h2>
      </div>
      <div style={styles.gridList}>
        {recommendations.map((surah) => (
          <button
            key={surah.number}
            type="button"
            onClick={() => onOpenSurah(surah.number)}
            style={{ ...styles.recommendationCard, borderColor: theme.border, background: theme.pageBg, color: theme.text }}
          >
            <div style={styles.recommendationTop}>
              <span style={{ ...styles.recommendationIndex, background: theme.accentSoft, color: theme.accentStrong }}>{surah.number}</span>
              <span style={{ ...styles.badge, background: theme.accentSoft, color: theme.accentStrong }}>{surah.type}</span>
            </div>
            <strong style={styles.recommendationTitle}>{surah.translit}</strong>
            <span style={{ ...styles.recommendationText, color: theme.muted }}>{surah.fr}</span>
            <div dir="rtl" style={{ ...styles.recommendationArabic, color: theme.text }}>{surah.arabic}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

