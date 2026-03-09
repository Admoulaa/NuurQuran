# PLAN DE REFONTE COMPLETE - Quran App

## ARCHITECTURE UI FINALE

### 1. Structure des Pages

```
├── ACCUEIL (TodayPage)
│   └── Hero + Accès rapide + Sourates recommandées
│
├── LECTEUR (PlayerPage) - NOUVEAU DESIGN
│   ├── Header avec navigation
│   ├── Card lecteur premium:
│   │   ├── Image récitateur (gauche)
│   │   ├── Infos: sourate, récitateur, verset
│   │   └── Controls: play/pause, prev/next, seek
│   ├── Barre de progression
│   ├── Liste des récitateurs avec images
│   └── Navigation entre sourates
│
├── PAGE LECTURE (ReadingPage) - MODE LECTURE SEULEMENT
│   ├── Header: titre sourate + selection mode
│   ├── Barre d'outils:
│   │   ├── Recherche
│   │   ├── Selection sourate
│   │   ├── Langue traduction
│   │   └── Mode lecture (dropdown)
│   ├── Liste des versets (design Coran Pro):
│   │   ├── Numéro verset
│   │   ├── Arabe (grand)
│   │   ├── Phonétique (optionnel)
│   │   ├── Traduction (optionnel)
│   │   └── Actions: play, loop
│   └── Scroll automatique vers verset actif
│
├── MINI PLAYER (MiniPlayer) - SYNCHRONISE
│   ├── Infos: sourate, récitateur
│   ├── Controls: play/pause
│   └── Bouton ouvrir
│
├── PARCOURS (ReadingPlanPage)
├── SIGNETS (BookmarksPage)
└── PARAMETRES (SettingsPage)
```

### 2. Modes de Lecture (ReadingPage)

| Mode | Arabe | Phonétique | Traduction |
|------|-------|------------|------------|
| Arabe seul | ✅ | ❌ | ❌ |
| Arabe + Trad | ✅ | ❌ | ✅ |
| Complet | ✅ | ✅ | ✅ |
| Mushaf (scroll) | ✅ (continu) | ❌ | ✅ |

### 3. Audio - Flux de Données

```
App.jsx (State Central)
├── audioRef (lecteur principal)
├── preloadAudioRef (preload verset suivant)
├── isPlaying
├── currentSurahNumber
├── currentVerse
├── selectedReciterId
│
├── PlayerPage <─── props ───┐
├── MiniPlayer <─────────────┤
└── ReadingPage <────────────┘
```

### 4. Fichiers à Modifier

| Fichier | Action |
|---------|--------|
| `src/App.jsx` | Refonte state management, audio sync |
| `src/styles/createStyles.js` | Styles premium |
| `src/components/PlayerPage.jsx` | Grand lecteur premium |
| `src/components/MiniPlayer.jsx` | Mini player premium |
| `src/components/ReadingPage.jsx` | Modes lecture |
| `src/components/VerseCard.jsx` | Design Coran Pro |
| `src/data/constants.js` | Ajouter modes |

### 5. Changements Audio

#### Changement de Sourate:
```
1. Sauvegarder isPlaying dans ref
2. Changer source audio
3. Si wasPlaying: play()
4. Si wasPaused: garder pause
```

#### Preload verset suivant:
```
1. useEffect sur currentVerse
2. Si nextVerse existe: charger dans preloadAudioRef
3. Sur event "ended": swap src avec preload
```

### 6. Design Premium - Principes

- **Typographie**: Inter, plus de respiration
- **Cartes**: Bordures arrondies (24-32px), ombres subtiles
- **Espacement**: Gap 16-24px entre éléments
- **Couleurs**: Thème avec accent, gradient
- **Images**: Récitateurs avec border-radius
- **Icons**: Simples (▶ ⏸ ⏭ ⏮)

---

## CODE - ETAPE 1: AUDIO & ETAT

Je commence par corriger l'audio et la synchronisation Mini Player / Grand Lecteur.

Voici les fichiers complets ready-to-paste:

---

### 1. App.jsx - Gestion Audio Corrigée

(Je vais te donner le code complet après validation du plan)
