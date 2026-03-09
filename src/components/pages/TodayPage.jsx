import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SurahCard } from "../SurahCard";
import { RECOMMENDED_SURAHS, SURAHS } from "../../data/constants";
import { getDailyAyah } from "../../utils/helpers";

/**
 * TodayPage - Accueil Premium Coran Pro
 * Design immersif et chaleureux
 */
export function TodayPage({ onOpenSurah, onGoPlayer, dailyAyah, styles, theme }) {
  const recommendations = RECOMMENDED_SURAHS.map((number) =>
    SURAHS.find((surah) => surah.number === number)
  ).filter(Boolean);

  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Bienvenue"
        title="Quran Pro"
        description="Votre compagnon quotidien pour la lecture et l'écoute du Saint Coran"
        styles={styles}
        theme={theme}
      />

      {/* Hero Section - Paix et bénédiction */}
      <section style={{ ...styles.heroCard, background: theme.hero }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div dir="rtl" style={{ ...styles.heroArabic, fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِیمِ
          </div>
          <p style={{ ...styles.heroText, marginTop: 16 }}>
            Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux
          </p>
        </div>
        <div style={styles.heroStats}>
          <strong style={styles.heroStatsNumber}>114</strong>
          <span style={{ fontSize: 13 }}>Sourates</span>
        </div>
      </section>

      {/* Verset du jour */}
      <Card styles={styles} theme={theme}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 20 }}>✨</span>
          <span style={{ ...styles.sectionTag, color: theme.accentStrong }}>Verset du jour</span>
        </div>
        <div dir="rtl" style={{ ...styles.ayahArabic, color: theme.text }}>
          {dailyAyah.arabic}
        </div>
        <p style={{ ...styles.ayahTranslation, color: theme.text, marginTop: 16 }}>
          {dailyAyah.translation}
        </p>
        <div style={{ ...styles.ayahRef, color: theme.accentStrong, marginTop: 12 }}>
          {dailyAyah.ref}
        </div>
      </Card>

      {/* Actions principales */}
      <div style={styles.sectionHeader}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Commencer</h2>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
        {/* Carte Lecture Audio */}
        <button
          type="button"
          onClick={onGoPlayer}
          style={{
            ...styles.quickAction,
            background: theme.accentGradient,
            border: "none",
            color: "#fff",
            padding: 24,
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ 
              width: 56, 
              height: 56, 
              borderRadius: 16, 
              background: "rgba(255,255,255,0.2)",
              display: "grid",
              placeItems: "center",
              fontSize: 24,
            }}>
              🎧
            </div>
            <div>
              <strong style={{ fontSize: 18, display: "block" }}>Lecture Audio</strong>
              <span style={{ fontSize: 14, opacity: 0.9 }}>
                Écoutez avec votre récitant favori
              </span>
            </div>
          </div>
        </button>

        {/* Carte Lecture Texte */}
        <button
          type="button"
          onClick={() => onOpenSurah(1)}
          style={{
            ...styles.quickAction,
            borderColor: theme.border,
            background: theme.pageBg,
            color: theme.text,
            padding: 24,
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ 
              width: 56, 
              height: 56, 
              borderRadius: 16, 
              background: theme.accentSoft,
              display: "grid",
              placeItems: "center",
              fontSize: 24,
            }}>
              📖
            </div>
            <div>
              <strong style={{ fontSize: 18, display: "block" }}>Lire le Coran</strong>
              <span style={{ fontSize: 14, color: theme.muted }}>
                Al-Fatihah et les 113 autres sourates
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Sourates recommandées */}
      <div style={{ ...styles.sectionHeader, marginTop: 8 }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Sourates populaires</h2>
        <button
          type="button"
          onClick={() => onOpenSurah(1)}
          style={{ ...styles.secondaryButton, padding: "8px 14px", fontSize: 13 }}
        >
          Voir tout →
        </button>
      </div>
      
      <div style={styles.gridList}>
        {recommendations.map((surah, index) => (
          <button
            key={surah.number}
            type="button"
            onClick={() => onOpenSurah(surah.number)}
            style={{
              ...styles.recommendationCard,
              borderColor: theme.border,
              background: theme.pageBg,
              color: theme.text,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Badge序号 */}
            <div style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 28,
              height: 28,
              borderRadius: 8,
              background: theme.accentSoft,
              color: theme.accentStrong,
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: 12,
            }}>
              {surah.number}
            </div>
            
            {/* Titre français */}
            <strong style={{ ...styles.recommendationTitle, marginTop: 8, display: "block" }}>
              {surah.fr}
            </strong>
            
            {/* Titre arabe */}
            <div dir="rtl" style={{ ...styles.recommendationArabic, marginTop: 8, color: theme.text }}>
              {surah.arabic}
            </div>
            
            {/* Meta */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginTop: 12,
              paddingTop: 12,
              borderTop: `1px solid ${theme.border}`,
            }}>
              <span style={{ fontSize: 12, color: theme.muted, fontWeight: 600 }}>
                {surah.type}
              </span>
              <span style={{ fontSize: 16 }}>→</span>
            </div>
          </button>
        ))}
      </div>

      {/* Citation */}
      <Card styles={styles} theme={theme}>
        <div style={{ textAlign: "center", padding: "8px 0" }}>
          <p style={{ 
            fontSize: 18, 
            fontStyle: "italic", 
            lineHeight: 1.7,
            color: theme.text,
            margin: 0,
          }}>
            "إِنَّ مَعَ الْعُسْرِ يُسْرًا"
          </p>
          <p style={{ 
            fontSize: 14, 
            color: theme.muted,
            marginTop: 12,
          }}>
            Certes, avec la difficulté vient la facilité. — Coran 94:5
          </p>
        </div>
      </Card>
    </div>
  );
}

