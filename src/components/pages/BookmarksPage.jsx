import { PageHeader } from "../PageHeader";
import { Card } from "../Card";
import { SurahCard } from "../SurahCard";

export function BookmarksPage({ bookmarkedSurahs, currentSurahNumber, glowEnabled, onOpenSurah, onToggleBookmark, styles, theme }) {
  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Bibliothèque"
        title="Signets"
        description={`${bookmarkedSurahs.length} sourate${bookmarkedSurahs.length > 1 ? "s" : ""} enregistrée${bookmarkedSurahs.length > 1 ? "s" : ""}.`}
        styles={styles}
        theme={theme}
      />

      {bookmarkedSurahs.length === 0 ? (
        <Card style={styles.emptyCard} styles={styles} theme={theme}>
          <div style={styles.emptyEmoji}>🔖</div>
          <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Aucun signet pour le moment</h2>
          <p style={{ ...styles.pageDescription, color: theme.muted }}>Ajoutez vos sourates favorites pour les retrouver instantanément.</p>
        </Card>
      ) : (
        <div style={styles.stack}>
          {bookmarkedSurahs.map((surah) => (
            <SurahCard
              key={surah.number}
              item={surah}
              bookmarked={true}
              active={surah.number === currentSurahNumber}
              onOpen={onOpenSurah}
              onToggleBookmark={onToggleBookmark}
              styles={styles}
              theme={theme}
              showLight={glowEnabled}
            />
          ))}
        </div>
      )}
    </div>
  );
}

