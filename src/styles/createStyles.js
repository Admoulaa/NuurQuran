/**
 * Quran App - Premium Styles inspired by Coran Pro
 * Design épuré, typographie arabe élégante, layout immersif
 */

export function createStyles(theme) {
  return {
    // ============================================
    // APP & LAYOUT
    // ============================================
    appBg: {
      minHeight: "100vh",
      padding: "0 0 120px 0",
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      background: theme.appBg,
      transition: "background 300ms ease",
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
    },
    pageContent: {
      display: "grid",
      gap: 16,
      paddingTop: 24,
    },

    // ============================================
    // PAGE HEADER
    // ============================================
    pageHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
      padding: "0 4px",
    },
    eyebrow: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      marginBottom: 4,
      color: theme.accentStrong,
    },
    pageTitle: {
      margin: 0,
      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
      fontWeight: 800,
      lineHeight: 1.15,
      color: theme.text,
    },
    pageDescription: {
      margin: "6px 0 0",
      fontSize: 15,
      lineHeight: 1.5,
      color: theme.muted,
    },

    // ============================================
    // CARDS
    // ============================================
    card: {
      background: theme.pageBg,
      borderRadius: 20,
      border: `1px solid ${theme.border}`,
      padding: 20,
      transition: "all 200ms ease",
    },
    heroCard: {
      color: "#fff",
      borderRadius: 24,
      padding: 28,
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      boxShadow: theme.shadow,
      background: theme.hero,
    },
    heroArabic: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 700,
      fontFamily: '"Amiri", "Traditional Arabic", serif',
      lineHeight: 1.6,
    },
    heroText: {
      margin: "12px 0 0",
      fontSize: 17,
      opacity: 0.95,
      lineHeight: 1.6,
    },
    heroStats: {
      minWidth: 100,
      borderRadius: 20,
      background: "rgba(255,255,255,0.12)",
      padding: 16,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      gap: 4,
      border: "1px solid rgba(255,255,255,0.15)",
    },
    heroStatsNumber: {
      fontSize: 28,
      fontWeight: 800,
      color: "#fde68a",
    },

    // ============================================
    // SECTIONS
    // ============================================
    sectionTag: {
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: 11,
      letterSpacing: ".1em",
      color: theme.accentStrong,
    },
    sectionHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      marginBottom: 12,
    },
    sectionTitle: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      color: theme.text,
    },
    sectionMeta: {
      fontSize: 13,
      color: theme.muted,
    },

    // ============================================
    // AYAH / VERSE
    // ============================================
    ayahArabic: {
      marginTop: 20,
      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
      fontFamily: '"Amiri", "Traditional Arabic", "Scheherazade", serif',
      fontWeight: 400,
      lineHeight: 1.9,
      textAlign: "right",
      letterSpacing: "0",
    },
    ayahTranslation: {
      margin: "16px 0 0",
      fontSize: 16,
      lineHeight: 1.75,
      color: theme.text,
    },
    ayahRef: {
      marginTop: 10,
      fontWeight: 600,
      fontSize: 13,
      color: theme.muted,
    },

    // ============================================
    // QUICK ACTIONS
    // ============================================
    quickGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 12,
    },
    quickAction: {
      borderRadius: 18,
      padding: 18,
      display: "grid",
      gap: 8,
      textAlign: "left",
      cursor: "pointer",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      transition: "all 200ms ease",
    },
    quickActionPrimary: {
      color: "#fff",
      border: "none",
    },
    quickActionEmoji: {
      fontSize: 22,
    },

    // ============================================
    // GRID LIST
    // ============================================
    gridList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 12,
    },

    // ============================================
    // RECOMMENDATION
    // ============================================
    recommendationCard: {
      borderRadius: 18,
      padding: 16,
      display: "grid",
      gap: 8,
      textAlign: "left",
      cursor: "pointer",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      transition: "all 200ms ease",
    },
    recommendationTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    recommendationIndex: {
      width: 34,
      height: 34,
      borderRadius: 10,
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontSize: 14,
    },
    recommendationTitle: {
      fontSize: 17,
      fontWeight: 700,
    },
    recommendationText: {
      fontSize: 14,
      color: theme.muted,
    },
    recommendationArabic: {
      fontSize: 24,
      fontFamily: '"Amiri", serif',
    },

    // ============================================
    // PLAYER
    // ============================================
    playerHero: {
      background: theme.pageBg,
      borderRadius: 24,
      border: `1px solid ${theme.border}`,
      padding: 24,
      display: "grid",
      gap: 20,
    },
    playerHeroContent: {
      display: "flex",
      gap: 20,
      alignItems: "center",
    },
    playerHeroImage: {
      width: 100,
      height: 100,
      borderRadius: 16,
      objectFit: "cover",
      background: theme.accentSoft,
      flexShrink: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    },
    playerHeroInfo: {
      flex: 1,
      minWidth: 0,
    },
    playerHeroLabel: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      color: theme.accentStrong,
    },
    playerHeroTitle: {
      fontSize: 24,
      fontWeight: 800,
      marginTop: 4,
      color: theme.text,
      lineHeight: 1.2,
    },
    playerHeroMeta: {
      marginTop: 6,
      fontSize: 14,
      color: theme.muted,
    },
    playerHeroVerse: {
      marginTop: 4,
      fontSize: 13,
      fontWeight: 600,
      color: theme.accentStrong,
    },
    playerProgressWrap: {
      marginTop: 4,
    },
    playerProgressBar: {
      width: "100%",
      height: 4,
      borderRadius: 999,
      background: theme.border,
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
    },
    playerProgressFill: {
      height: "100%",
      borderRadius: 999,
      background: theme.accentGradient,
      transition: "width 150ms linear",
    },
    playerProgressTime: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontSize: 12,
      fontWeight: 500,
      color: theme.muted,
    },
    playerControls: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      marginTop: 8,
    },
    playerControlButton: {
      border: "none",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      transition: "all 200ms ease",
    },
    playerControlButtonMain: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: theme.accentGradient,
      color: "#fff",
      fontSize: 22,
      boxShadow: "0 6px 20px rgba(139, 94, 52, 0.3)",
    },
    playerControlButtonSecondary: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: theme.pageBg,
      border: `1px solid ${theme.border}`,
      color: theme.text,
      fontSize: 16,
    },
    playerNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
      paddingTop: 16,
      borderTop: `1px solid ${theme.border}`,
    },
    playerNavButton: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 14px",
      borderRadius: 10,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      color: theme.text,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 13,
      transition: "all 200ms ease",
    },
    playerHelperText: {
      marginTop: 16,
      padding: 12,
      borderRadius: 12,
      fontSize: 13,
      lineHeight: 1.5,
      textAlign: "center",
      background: theme.accentSoft,
      color: theme.accentStrong,
    },

    // ============================================
    // RECITER
    // ============================================
    loopBanner: {
      borderRadius: 14,
      padding: "10px 12px",
      fontWeight: 600,
      fontSize: 13,
    },
    reciterGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 12,
    },
    reciterCard: {
      display: "grid",
      gap: 14,
      padding: 18,
      borderRadius: 18,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      cursor: "pointer",
      transition: "all 200ms ease",
    },
    reciterCardActive: {
      borderColor: theme.accent,
      background: theme.accentSoft,
    },
    reciterCardTop: {
      display: "flex",
      gap: 14,
      alignItems: "center",
    },
    reciterImage: {
      width: 64,
      height: 64,
      borderRadius: 14,
      objectFit: "cover",
      background: theme.accentSoft,
      flexShrink: 0,
    },
    reciterCardInfo: {
      flex: 1,
      minWidth: 0,
    },
    reciterName: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: theme.text,
    },
    reciterDescription: {
      margin: "4px 0 0",
      fontSize: 13,
      lineHeight: 1.4,
      color: theme.muted,
    },
    reciterActions: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
    },

    // ============================================
    // READING PAGE
    // ============================================
    readingToolbarGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: 12,
    },
    fieldWrap: {
      display: "grid",
      gap: 6,
    },
    label: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.muted,
    },
    input: {
      height: 44,
      borderRadius: 12,
      border: `1px solid ${theme.border}`,
      padding: "0 14px",
      fontSize: 15,
      outline: "none",
      width: "100%",
      background: theme.pageBg,
      color: theme.text,
      transition: "border-color 200ms ease",
    },
    select: {
      height: 44,
      borderRadius: 12,
      border: `1px solid ${theme.border}`,
      padding: "0 14px",
      fontSize: 15,
      outline: "none",
      width: "100%",
      cursor: "pointer",
      background: theme.pageBg,
      color: theme.text,
    },
    readingActions: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 14,
    },
    helperText: {
      marginTop: 12,
      fontSize: 13,
      lineHeight: 1.5,
      color: theme.muted,
    },
    readingModeSelector: {
      display: "flex",
      gap: 8,
      marginTop: 16,
      flexWrap: "wrap",
      background: theme.pageBg,
      padding: 4,
      borderRadius: 14,
      border: `1px solid ${theme.border}`,
    },
    readingModeButton: {
      flex: 1,
      minWidth: "fit-content",
      padding: "10px 16px",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 13,
      transition: "all 200ms ease",
      background: "transparent",
      color: theme.text,
    },
    readingModeButtonActive: {
      background: theme.accentGradient,
      color: "#fff",
      boxShadow: "0 4px 12px rgba(139, 94, 52, 0.2)",
    },

    // ============================================
    // STACK
    // ============================================
    stack: {
      display: "grid",
      gap: 10,
    },

    // ============================================
    // SURAH CARD
    // ============================================
    surahCard: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderRadius: 16,
      padding: 12,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      transition: "all 200ms ease",
    },
    surahCardMain: {
      flex: 1,
      border: "none",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      gap: 14,
      cursor: "pointer",
      textAlign: "left",
      minWidth: 0,
      padding: 0,
    },
    surahIndex: {
      width: 40,
      height: 40,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontSize: 15,
      flexShrink: 0,
      background: theme.accentSoft,
      color: theme.accentStrong,
    },
    surahInfo: {
      flex: 1,
      minWidth: 0,
    },
    surahTitle: {
      fontSize: 17,
      fontWeight: 700,
      color: theme.text,
    },
    surahMeta: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      marginTop: 2,
      fontSize: 13,
      color: theme.muted,
    },
    surahArabic: {
      fontSize: 22,
      fontFamily: '"Amiri", serif',
    },
    bookmarkButton: {
      width: 40,
      borderRadius: 10,
      cursor: "pointer",
      fontSize: 18,
      flexShrink: 0,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
    },
    badge: {
      padding: "4px 8px",
      borderRadius: 6,
      fontWeight: 600,
      fontSize: 11,
    },
    statusLight: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      display: "inline-block",
      flexShrink: 0,
    },
    surahSummaryTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
    },
    currentSurahTitleWrap: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    currentSurahArabic: {
      fontSize: 28,
      fontFamily: '"Amiri", serif',
    },

    // ============================================
    // VERSE CARD - STYLE MUSHAF CORAN PRO
    // ============================================
    verseCard: {
      width: "100%",
      borderRadius: 16,
      padding: "16px 18px",
      textAlign: "left",
      cursor: "pointer",
      transition: "all 200ms ease",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
    },
    verseCardActive: {
      borderColor: theme.accent,
      background: theme.accentSoft,
      boxShadow: `0 0 0 1px ${theme.accent}`,
    },
    // ✅ FIX : flexWrap nowrap + alignItems center strict
    verseTopRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      flexWrap: "nowrap",
      marginBottom: 8,
    },
    // ✅ FIX : flexShrink 0 pour éviter l'écrasement
    verseTopLeft: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexShrink: 0,
    },
    verseTopActions: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    // ✅ FIX : display flex au lieu de grid pour centrage fiable
    verseBadge: {
      width: 32,
      height: 32,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 13,
      flexShrink: 0,
      lineHeight: 1,
      background: theme.accentSoft,
      color: theme.accentStrong,
    },
    liveBadge: {
      padding: "4px 10px",
      borderRadius: 6,
      fontWeight: 700,
      fontSize: 11,
      background: theme.accentGradient,
      color: "#fff",
    },
    loopChip: {
      borderRadius: 6,
      padding: "6px 10px",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 12,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      color: theme.text,
    },
    verseArabic: {
      marginTop: 8,
      fontSize: "clamp(1.75rem, 4vw, 2.2rem)",
      fontFamily: '"Amiri", "Traditional Arabic", "Scheherazade", serif',
      fontWeight: 400,
      lineHeight: 2.1,
      textAlign: "right",
      letterSpacing: "0",
      color: theme.text,
    },
    verseTransliteration: {
      marginTop: 12,
      lineHeight: 1.7,
      fontStyle: "italic",
      fontSize: 14,
      color: theme.muted,
    },
    verseTranslation: {
      marginTop: 12,
      lineHeight: 1.8,
      fontSize: 15,
      color: theme.text,
    },

    // ============================================
    // LOADING / ERROR
    // ============================================
    loadingBox: {
      fontSize: 15,
      padding: 40,
      textAlign: "center",
      color: theme.muted,
    },
    errorBox: {
      padding: 20,
      textAlign: "center",
      color: "#b42318",
    },
    errorText: {
      margin: "8px 0 0",
      lineHeight: 1.5,
    },

    // ============================================
    // PLAN
    // ============================================
    planHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16,
      flexWrap: "wrap",
    },
    planActions: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 14,
    },
    planChip: {
      borderRadius: 8,
      padding: "8px 12px",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 13,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      color: theme.text,
    },
    emptyCard: {
      textAlign: "center",
      minHeight: 200,
      display: "grid",
      placeItems: "center",
      gap: 8,
    },
    emptyEmoji: {
      fontSize: 48,
    },

    // ============================================
    // SETTINGS
    // ============================================
    themeGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: 12,
    },
    themeCard: {
      borderRadius: 16,
      padding: 12,
      textAlign: "left",
      cursor: "pointer",
      display: "grid",
      gap: 8,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      transition: "all 200ms ease",
    },
    themeCardActive: {
      borderColor: theme.accent,
    },
    themePreview: {
      height: 56,
      borderRadius: 12,
    },
    settingsGroup: {
      marginTop: 16,
      display: "grid",
      gap: 8,
    },
    settingsRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: "12px 0",
      borderBottom: `1px solid ${theme.border}`,
    },
    settingsValue: {
      fontWeight: 700,
      color: theme.accentStrong,
    },
    rangeInput: {
      width: "100%",
    },
    settingsSwitchList: {
      display: "grid",
      gap: 10,
      marginTop: 16,
    },
    toggleRow: {
      borderRadius: 14,
      padding: 14,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      textAlign: "left",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
    },
    toggleHint: {
      marginTop: 4,
      fontSize: 13,
      lineHeight: 1.4,
      color: theme.muted,
    },
    togglePill: {
      width: 44,
      height: 26,
      borderRadius: 999,
      flexShrink: 0,
    },
    settingsActions: {
      marginTop: 16,
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
    },

    // ============================================
    // BOTTOM NAV
    // ============================================
    bottomNavWrap: {
      position: "fixed",
      left: 12,
      right: 12,
      bottom: 12,
      zIndex: 40,
      display: "flex",
      justifyContent: "center",
      pointerEvents: "none",
    },
    bottomNav: {
      width: "min(100%, 480px)",
      borderRadius: 24,
      padding: "6px 8px",
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 4,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      backdropFilter: "blur(16px)",
      pointerEvents: "auto",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
    },
    bottomNavButton: {
      border: "none",
      background: "transparent",
      borderRadius: 16,
      padding: "10px 6px",
      display: "grid",
      justifyItems: "center",
      gap: 4,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 11,
      transition: "all 200ms ease",
      color: theme.muted,
    },
    bottomNavButtonActive: {
      color: theme.accentStrong,
      background: theme.accentSoft,
    },
    bottomNavIcon: {
      fontSize: 18,
    },

    // ============================================
    // MINI PLAYER
    // ============================================
    miniPlayerWrap: {
      position: "fixed",
      left: 12,
      right: 12,
      bottom: 88,
      zIndex: 35,
      display: "flex",
      justifyContent: "center",
      pointerEvents: "none",
    },
    miniPlayer: {
      width: "min(100%, 480px)",
      borderRadius: 20,
      padding: "10px 12px",
      display: "flex",
      gap: 12,
      alignItems: "center",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
      backdropFilter: "blur(20px)",
      pointerEvents: "auto",
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
    },
    miniPlayerImage: {
      width: 48,
      height: 48,
      borderRadius: 12,
      objectFit: "cover",
      background: theme.accentSoft,
      flexShrink: 0,
    },
    miniPlayerMain: {
      flex: 1,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      minWidth: 0,
      padding: 0,
    },
    miniPlayerEyebrow: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: theme.accentStrong,
    },
    miniPlayerTitle: {
      marginTop: 2,
      fontWeight: 700,
      fontSize: 14,
      color: theme.text,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    miniPlayerMeta: {
      marginTop: 1,
      fontSize: 12,
      color: theme.muted,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    miniPlayerControls: {
      display: "flex",
      gap: 6,
      alignItems: "center",
    },
    miniPlayerButton: {
      border: "none",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      transition: "all 200ms ease",
    },
    miniPlayerPlayButton: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: theme.accentGradient,
      color: "#fff",
      fontSize: 14,
      boxShadow: "0 4px 12px rgba(139, 94, 52, 0.25)",
    },
    miniPlayerNavButton: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "transparent",
      border: `1px solid ${theme.border}`,
      color: theme.text,
      fontSize: 12,
    },

    // ============================================
    // BUTTONS
    // ============================================
    primaryButton: {
      border: "none",
      borderRadius: 12,
      padding: "10px 18px",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: 14,
      background: theme.accentGradient,
      color: "#fff",
      boxShadow: "0 4px 12px rgba(139, 94, 52, 0.2)",
      transition: "all 200ms ease",
    },
    secondaryButton: {
      borderRadius: 12,
      padding: "10px 18px",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 14,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      color: theme.text,
      transition: "all 200ms ease",
    },
    iconButtonDark: {
      width: 44,
      height: 44,
      border: "none",
      borderRadius: 12,
      cursor: "pointer",
      fontSize: 16,
    },
    buttonDisabled: {
      opacity: 0.45,
      cursor: "not-allowed",
    },

    // ============================================
    // INVOCATIONS PAGE
    // ============================================
    invocationHero: {
      borderRadius: 24,
      padding: 28,
      background: theme.hero,
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    },
    invocationHeroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, rgba(139, 94, 52, 0.85) 0%, rgba(89, 64, 36, 0.9) 100%)",
    },
    invocationHeroContent: {
      position: "relative",
      zIndex: 1,
    },
    invocationHeroTitle: {
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
      fontWeight: 800,
      marginBottom: 8,
      lineHeight: 1.2,
    },
    invocationHeroSubtitle: {
      fontSize: "1rem",
      opacity: 0.9,
      lineHeight: 1.5,
      maxWidth: 400,
    },
    invocationHeroIcon: {
      fontSize: 48,
      marginBottom: 16,
    },
    invocationSearch: {
      position: "relative",
      marginBottom: 20,
    },
    invocationSearchInput: {
      width: "100%",
      height: 52,
      borderRadius: 16,
      border: `1px solid ${theme.border}`,
      padding: "0 16px 0 48px",
      fontSize: 15,
      background: theme.pageBg,
      color: theme.text,
      outline: "none",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    },
    invocationSearchIcon: {
      position: "absolute",
      left: 16,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 18,
      color: theme.muted,
    },
    invocationCategoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: 12,
      marginBottom: 24,
    },
    invocationCategoryCard: {
      borderRadius: 18,
      padding: 20,
      background: theme.pageBg,
      border: `1px solid ${theme.border}`,
      cursor: "pointer",
      textAlign: "center",
      transition: "all 0.2s ease",
      display: "grid",
      gap: 10,
      alignContent: "center",
    },
    invocationCategoryCardActive: {
      borderColor: theme.accent,
      background: theme.accentSoft,
      boxShadow: `0 0 0 1px ${theme.accent}`,
    },
    invocationCategoryEmoji: {
      fontSize: 32,
    },
    invocationCategoryTitle: {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: theme.text,
    },
    invocationCategoryCount: {
      fontSize: "0.75rem",
      color: theme.muted,
    },
    invocationSection: {
      marginBottom: 16,
    },
    invocationSectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: `1px solid ${theme.border}`,
    },
    invocationSectionBack: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      borderRadius: 10,
      border: `1px solid ${theme.border}`,
      background: theme.pageBg,
      color: theme.text,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 13,
      transition: "all 0.2s ease",
    },
    invocationSectionTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: theme.text,
      flex: 1,
    },
    invocationCard: {
      borderRadius: 16,
      padding: 20,
      background: theme.pageBg,
      border: `1px solid ${theme.border}`,
      marginBottom: 16,
      transition: "all 0.2s ease",
    },
    invocationCardArabic: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontFamily: '"Amiri", "Traditional Arabic", serif',
      lineHeight: 1.8,
      textAlign: "right",
      color: theme.text,
      marginBottom: 12,
    },
    invocationCardTranslit: {
      fontSize: "0.875rem",
      color: theme.accentStrong,
      fontStyle: "italic",
      marginBottom: 8,
      lineHeight: 1.5,
    },
    invocationCardTranslation: {
      fontSize: "0.95rem",
      color: theme.muted,
      lineHeight: 1.6,
      marginBottom: 12,
    },
    invocationCardSource: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: 6,
      fontSize: "0.75rem",
      fontWeight: 600,
      background: theme.accentSoft,
      color: theme.accentStrong,
    },
    invocationSubcategoryTabs: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 20,
      padding: 4,
      background: theme.pageBg,
      borderRadius: 14,
      border: `1px solid ${theme.border}`,
    },
    invocationSubcategoryTab: {
      flex: 1,
      minWidth: "fit-content",
      padding: "10px 16px",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "0.8rem",
      transition: "all 0.2s ease",
      background: "transparent",
      color: theme.text,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: 150,
    },
    invocationSubcategoryTabActive: {
      background: theme.accentGradient,
      color: "#fff",
    },
  };
}