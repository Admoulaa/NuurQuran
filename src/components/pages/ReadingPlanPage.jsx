import { useState, useMemo, useEffect } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";

// ============================================
// DONNÉES COMPLETES DES INVOCATIONS
// Source: Hisn al-Muslim (Fortress of the Muslim)
// ============================================

const INVOCATIONS_DATA = [
  {
    id: "maison",
    emoji: "🏠",
    title: "Maison",
    items: [
      { title: "En entrant", arabic: "بِسْمِ اللَّهِ أَدْخُلُ، بِسْمِ اللَّهِ أَخْرُجُ", translit: "Bismillah adkhulu, bismillah akhruju", translation: "Au nom d'Allah j'entre, au nom d'Allah je sors.", source: "Tirmidhi" },
      { title: "En sortant", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْخُرُوجِ فِي الْعُورَةِ", translit: "Allahumma inni a'udhu bika min al-khuruji fi al-'urrah", translation: "Ô Allah, je cherche Ta protection contre le fait de sortir nu.", source: "Abou Daoud" },
      { title: "Nouvelle maison", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ الْمَنْزِلِ", translit: "Allahumma inni as'aluka khayra hadhihi al-manzili", translation: "Ô Allah, je Te demande le bien de cette maison.", source: "Ibn Sunni" },
      { title: "Avant de dormir", arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي", translit: "Bismika rabbi wa da'tu janbi", translation: "C'est en Ton nom que je pose mon côté.", source: "Bukhari" },
    ]
  },
  {
    id: "mosquee",
    emoji: "🕌",
    title: "Mosquée",
    items: [
      { title: "En entrant", arabic: "بِسْمِ اللَّهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ", translit: "Bismillah was-salamu 'ala rasulillah", translation: "Au nom d'Allah et que la paix soit sur le Messager.", source: "Muslim" },
      { title: "En sortant", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّيْطَانِ الرَّجِيمِ", translit: "Allahumma inni a'udhu bika min ash-Shaytani ar-Rajim", translation: "Ô Allah, je cherche Ta protection contre le diable maudit.", source: "Bukhari" },
      { title: "Adhan", arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ", translit: "Allahumma rabba hadhihi ad-dawati at-tammati", translation: "Ô Allah, Seigneur de cette invocation parfaite.", source: "Bukhari" },
      { title: "Sortie mosquée", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", translit: "Allahumma inni as'aluka min fadlika", translation: "Ô Allah, je Te demande de Ta grâce.", source: "Ibn Sunni" },
    ]
  },
  {
    id: "priere",
    emoji: "🙏",
    title: "Prière",
    items: [
      { title: "Ouverture", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", translit: "Bismillahi ar-Rahmani ar-Rahim", translation: "Au nom d'Allah, le Miséricordieux.", source: "Coran 1:1" },
      { title: "Takbir", arabic: "اللَّهُ أَكْبَرُ كَبِيرًا", translit: "Allahu Akbar Kabiran", translation: "Allah est le Plus Grand.", source: "Muslim" },
      { title: "Ruku'", arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", translit: "Subhana Rabbiya al-'Azim", translation: "Gloire à mon Seigneur, le Très Grand.", source: "Bukhari" },
      { title: "Sujud", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", translit: "Subhana Rabbiya al-A'la", translation: "Gloire à mon Seigneur, le Plus Haut.", source: "Bukhari" },
      { title: "Tachahhoud", arabic: "التَّحِيَّاتُ لِلَّهِ", translit: "At-Tahiyyatu lillahi", translation: "Les salutations sont pour Allah.", source: "Bukhari" },
      { title: "Salawat", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", translit: "Allahumma sali 'ala Muhammadin", translation: "Ô Allah, prie sur Muhammad.", source: "Bukhari" },
    ]
  },
  {
    id: "sommeil",
    emoji: "🌙",
    title: "Sommeil",
    items: [
      { title: "Avant de dormir", arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي", translit: "Bismika rabbi wa da'tu janbi", translation: "C'est en Ton nom que je pose mon côté.", source: "Bukhari" },
      { title: "Protection nuit", arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ", translit: "Allahumma qini 'azabaka yawma tab'ath", translation: "Ô Allah, protège-moi de Ton châtiment.", source: "Bukhari" },
      { title: "Au réveil", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا", translit: "Al-hamdu lillahi alladhi ahyana", translation: "Louange à Allah qui nous a donné la vie.", source: "Bukhari" },
      { title: "Protection générale", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ", translit: "A'udhu bikalimati Allahi at-tammati", translation: "Je cherche protection dans les parfaites paroles d'Allah.", source: "Muslim" },
    ]
  },
  {
    id: "matin",
    emoji: "🌅",
    title: "Matin",
    items: [
      { title: "Invocation du matin", arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا", translit: "Allahumma bika asbahna", translation: "Ô Allah, c'est par Toi que nous commençons le matin.", source: "Tirmidhi" },
      { title: "Protection matin", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ", translit: "Allahumma inni a'udhu bika min ash-sharri", translation: "Ô Allah, je cherche Ta protection contre le mal.", source: "Ahmed" },
      { title: "Fitrah", arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ", translit: "Asbahna 'ala fitrati al-islam", translation: "Nous avons commencé sur la nature pure de l'Islam.", source: "Bukhari" },
    ]
  },
  {
    id: "soir",
    emoji: "🌆",
    title: "Soir",
    items: [
      { title: "Invocation du soir", arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا", translit: "Allahumma bika amsayna", translation: "Ô Allah, c'est par Toi que nous finissons la soirée.", source: "Tirmidhi" },
      { title: "Protection soir", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ مَا صَلَحَ", translit: "Allahumma inni a'udhu bika min ash-sharri ma salah", translation: "Ô Allah, je Te demande protection pour la nuit.", source: "Ahmed" },
    ]
  },
  {
    id: "voyage",
    emoji: "🚗",
    title: "Voyage",
    items: [
      { title: "Avant de partir", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ", translit: "Allahumma inni a'udhu bika min watha'safari", translation: "Ô Allah, protège-moi des difficultés du voyage.", source: "Abou Daoud" },
      { title: "Gloire création", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا", translit: "Subhanal-ladhi sakhkhara lana hadha", translation: "Gloire à Celui qui a soumis cela pour nous.", source: "Coran" },
      { title: "Au retour", arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ", translit: "A'ibuna ta'ibuna 'abiduna", translation: "Nous revenons, repentants, adorants.", source: "Muslim" },
    ]
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection",
    items: [
      { title: "Protection générale", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ", translit: "A'udhu bikalimati Allahi at-tammati", translation: "Je cherche protection dans les parfaites paroles d'Allah.", source: "Muslim" },
      { title: "Tombe", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ", translit: "Allahumma inni a'udhu bika min 'adhab al-qabri", translation: "Ô Allah, protège-moi du châtiment de la tombe.", source: "Muslim" },
      { title: "Hawqala", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translit: "La hawla wa la quwwata illa billah", translation: "Il n'y a de force qu'en Allah.", source: "Bukhari" },
    ]
  },
  {
    id: "pardon",
    emoji: "🤲",
    title: "Pardon",
    items: [
      { title: "Istighfar", arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ", translit: "Astaghfirullah al-'Azim", translation: "Je demande pardon à Allah le Très Grand.", source: "Tirmidhi" },
      { title: "Repentir", arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي", translit: "Rabbi inni zalamtu nafsi", translation: "Seigneur, j'ai oppressé mon âme.", source: "Coran" },
      { title: "Attahiyyat", arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ", translit: "Allahumma anta as-salamu", translation: "Ô Allah, Tu es la Paix.", source: "Muslim" },
    ]
  },
  {
    id: "nourriture",
    emoji: "🍽️",
    title: "Nourriture",
    items: [
      { title: "Avant de manger", arabic: "بِسْمِ اللَّهِ", translit: "Bismillah", translation: "Au nom d'Allah.", source: "Abou Daoud" },
      { title: "Bénédiction", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا", translit: "Allahumma barik lana fima razqtana", translation: "Ô Allah, bénis ce que Tu nous as donné.", source: "Abou Daoud" },
      { title: "Après manger", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا", translit: "Al-hamdu lillahi alladhi at'amana", translation: "Louange à Allah qui nous a nourris.", source: "Abou Daoud" },
    ]
  },
  {
    id: "dhikr",
    emoji: "✨",
    title: "Dhikr",
    items: [
      { title: "Tasbih", arabic: "سُبْحَانَ اللَّهِ", translit: "SubhanAllah", translation: "Gloire à Allah.", source: "Bukhari" },
      { title: "Tahmid", arabic: "الْحَمْدُ لِلَّهِ", translit: "Al-hamdu lillah", translation: "Louange à Allah.", source: "Bukhari" },
      { title: "Takbir", arabic: "اللَّهُ أَكْبَرُ", translit: "Allahu Akbar", translation: "Allah est le Plus Grand.", source: "Bukhari" },
      { title: "Tahlil", arabic: "لَا إِلَهَ إِلَّا اللَّهُ", translit: "La ilaha illa Allah", translation: "Il n'y a de divinité qu'Allah.", source: "Bukhari" },
    ]
  },
  {
    id: "sante",
    emoji: "💊",
    title: "Santé",
    items: [
      { title: "Guérison", arabic: "اللَّهُمَّ اشْفِنِي", translit: "Allahumma shfini", translation: "Ô Allah, guéris-moi.", source: "Ibn Sunni" },
      { title: "Visite malade", arabic: "لَا بَأْسَ طَهُورٌ", translit: "La ba'sa tahurun", translation: "Que cela soit une purification.", source: "Bukhari" },
    ]
  }
];

// ============================================
// COMPOSANT PRINCIPAL - ULTRA PREMIUM DESIGN
// ============================================

export function ReadingPlanPage({ styles, theme }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effet de suivi de la souris pour le hero
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Filtrer les données
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return INVOCATIONS_DATA;
    
    const query = searchQuery.toLowerCase();
    const results = [];
    
    INVOCATIONS_DATA.forEach(category => {
      const matchingItems = category.items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.arabic.includes(query) ||
        item.translation.toLowerCase().includes(query) ||
        item.translit.toLowerCase().includes(query)
      );
      
      if (matchingItems.length > 0) {
        results.push({ ...category, items: matchingItems });
      }
    });
    
    return results;
  }, [searchQuery]);

  // Compter le total
  const totalCount = useMemo(() => {
    return INVOCATIONS_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Calculer la position du spotlight
  const getSpotlightStyle = () => {
    const x = (mousePosition.x / window.innerWidth) * 100;
    const y = (mousePosition.y / window.innerHeight) * 100;
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
    };
  };

  return (
    <div style={styles.pageContent}>
      {/* ULTRA PREMIUM HERO SECTION */}
      <div style={{
        ...styles.invocationHero,
        background: theme.hero,
        position: "relative",
        overflow: "hidden",
        minHeight: 200,
      }}>
        {/* Animated background elements - Uses theme colors */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: theme.hero,
          zIndex: 1,
        }} />
        
        {/* Floating orbs */}
        <div style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          top: -100,
          right: -50,
          animation: "float 6s ease-in-out infinite",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          bottom: -50,
          left: -30,
          animation: "float 8s ease-in-out infinite reverse",
          zIndex: 2,
        }} />
        
        {/* Mouse spotlight effect */}
        <div style={{
          position: "absolute",
          inset: 0,
          ...getSpotlightStyle(),
          zIndex: 3,
          pointerEvents: "none",
        }} />
        
        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "32px 20px",
        }}>
          <div style={{
            fontSize: 56,
            marginBottom: 12,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
            animation: "pulse 3s ease-in-out infinite",
          }}>
            🤲
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 8px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            letterSpacing: "-0.02em",
          }}>
            Invocations
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            margin: "0 auto",
            maxWidth: 400,
            lineHeight: 1.5,
          }}>
            {totalCount} invocation{totalCount > 1 ? "s" : ""} du Coran et de la Sunna
          </p>
          
          {/* Decorative dots */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 20,
          }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.3)",
                animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
              }} />
            ))}
          </div>
        </div>
        
        {/* Wave divider */}
        <div style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          height: 30,
        }}>
          <svg viewBox="0 0 1200 30" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,30 C300,0 600,0 900,15 C1050,25 1150,25 1200,30 L1200,0 L0,0 Z" fill={theme.pageBg} />
          </svg>
        </div>
      </div>

      {/* PREMIUM SEARCH BAR */}
      <div style={{
        position: "relative",
        marginTop: -10,
        marginBottom: 24,
        zIndex: 20,
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: theme.pageBg,
          borderRadius: 20,
          border: `1px solid ${theme.border}`,
          padding: "4px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        }}>
          <span style={{
            padding: "0 16px",
            fontSize: 18,
            color: theme.muted,
          }}>🔍</span>
          <input
            type="text"
            placeholder="Rechercher une invocation..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearching(e.target.value.length > 0);
            }}
            onFocus={() => setIsSearching(true)}
            style={{
              flex: 1,
              height: 48,
              border: "none",
              background: "transparent",
              fontSize: 15,
              color: theme.text,
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setIsSearching(false);
              }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                border: "none",
                background: theme.accentSoft,
                color: theme.accentStrong,
                cursor: "pointer",
                fontSize: 14,
                display: "grid",
                placeItems: "center",
                marginRight: 4,
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODE: Search Results or Categories */}
      {isSearching ? (
        /* SEARCH RESULTS */
        <div style={styles.stack}>
          <div style={{
            fontSize: 14,
            color: theme.muted,
            marginBottom: 16,
            fontWeight: 600,
          }}>
            {filteredData.reduce((acc, cat) => acc + cat.items.length, 0)} résultat{filteredData.reduce((acc, cat) => acc + cat.items.length, 0) > 1 ? "s" : ""} pour "{searchQuery}"
          </div>
          
          {filteredData.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: 60,
              color: theme.muted,
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p>Aucune invocation trouvée</p>
            </div>
          ) : (
            filteredData.map((category) => (
              category.items.map((item, idx) => (
                <div
                  key={`${category.id}-${idx}`}
                  style={{
                    ...styles.invocationCard,
                    borderLeft: `4px solid ${theme.accent}`,
                    padding: 24,
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}>
                    <span style={{ fontSize: 16 }}>{category.emoji}</span>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.accentStrong,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      {category.title}
                    </span>
                  </div>
                  <div style={styles.invocationCardArabic}>
                    {item.arabic}
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    color: theme.accentStrong,
                    fontStyle: "italic",
                    marginBottom: 8,
                    opacity: 0.8,
                  }}>
                    {item.translit}
                  </div>
                  <div style={styles.invocationCardTranslation}>
                    {item.translation}
                  </div>
                  <div style={{
                    ...styles.invocationCardSource,
                    marginTop: 12,
                  }}>
                    📖 {item.source}
                  </div>
                </div>
              ))
            ))
          )}
        </div>
      ) : selectedCategory ? (
        /* CATEGORY DETAIL VIEW */
        <div style={styles.stack}>
          {/* Back button */}
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderRadius: 12,
              border: `1px solid ${theme.border}`,
              background: theme.pageBg,
              color: theme.text,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 20,
              width: "fit-content",
              transition: "all 0.2s ease",
            }}
          >
            ← Retour aux catégories
          </button>
          
          {/* Category header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: theme.accent,
              display: "grid",
              placeItems: "center",
              fontSize: 32,
              boxShadow: `0 8px 24px ${theme.accent}40`,
            }}>
              {selectedCategory.emoji}
            </div>
            <div>
              <h2 style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: 700,
                color: theme.text,
              }}>
                {selectedCategory.title}
              </h2>
              <p style={{
                margin: "4px 0 0 0",
                fontSize: 14,
                color: theme.muted,
              }}>
                {selectedCategory.items.length} invocation{selectedCategory.items.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          
          {/* Invocation cards */}
          {selectedCategory.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                ...styles.invocationCard,
                borderLeft: `4px solid ${theme.accent}`,
                animation: `fadeInUp 0.3s ease-out ${idx * 0.05}s both`,
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: theme.accentStrong,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {item.title}
                </span>
                <span style={{
                  fontSize: "0.7rem",
                  color: theme.muted,
                  background: theme.accentSoft,
                  padding: "4px 8px",
                  borderRadius: 6,
                }}>
                  📖 {item.source}
                </span>
              </div>
              <div style={styles.invocationCardArabic}>
                {item.arabic}
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: theme.accentStrong,
                fontStyle: "italic",
                marginBottom: 8,
                lineHeight: 1.5,
              }}>
                {item.translit}
              </div>
              <div style={styles.invocationCardTranslation}>
                {item.translation}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* CATEGORIES GRID */
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 14,
        }}>
          {filteredData.map((category, idx) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: theme.pageBg,
                borderRadius: 20,
                border: `1px solid ${theme.border}`,
                padding: 24,
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
                animation: `fadeInUp 0.4s ease-out ${idx * 0.05}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 32px ${theme.accent}25`;
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = theme.border;
              }}
            >
              {/* Hover gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${theme.accent}10 0%, transparent 100%)`,
                opacity: 0,
                transition: "opacity 0.25s ease",
              }} className="category-hover" />
              
              <div style={{
                fontSize: 40,
                marginBottom: 12,
                position: "relative",
                zIndex: 1,
              }}>
                {category.emoji}
              </div>
              <div style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: 6,
                position: "relative",
                zIndex: 1,
              }}>
                {category.title}
              </div>
              <div style={{
                fontSize: "0.8rem",
                color: theme.muted,
                position: "relative",
                zIndex: 1,
              }}>
                {category.items.length} invocations
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

