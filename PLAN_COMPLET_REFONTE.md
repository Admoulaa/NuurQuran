# PLAN COMPLET DE REFONTE - Quran App Premium

## 1. RÉSUMÉ DES EXIGENCES UTILISATEUR

### 1.1 Audio
- ✅ Audio bout-en-bout fonctionnel
- ✅ Synchronisation parfaite grand lecteur ↔ mini player
- ✅ Changement de sourate : charger et lancer si lecture en cours
- ✅ Si en pause : nouvelle sourate reste en pause
- ✅ Mini player avec mêmes fonctionnalités essentielles

### 1.2 Grand Lecteur Premium
- ✅ Play / Pause
- ✅ Affichage sourate
- ✅ Affichage réciteur
- ✅ Affichage verset courant
- ✅ Navigation entre sourates fonctionnelle (précédent/suivant)
- ✅ Design premium

### 1.3 Mini Player Premium
- ✅ Plus beau et lisible
- ✅ Affiche sourate + réciteur + verset
- ✅ Play / Pause
- ✅ Contrôles essentiels同步
- ✅ Synchronisé avec grand lecteur

### 1.4 Page Lecture
- ✅ Mode lecture SEULEMENT (pas player)
- ✅ Immersive, centrée lecture
- ✅ Traductions visibles
- ✅ Modes: Arabe seul, Arabe+Trad, Arabe+Trad+Phonétique

### 1.5 Traductions
- ✅ Présentes et stables
- ✅ Visibles dans ReadingPage

### 1.6 Images Réciteurs
- ✅ Images dans grand lecteur
- ✅ Images dans mini player
- ✅ Images dans cartes réciteurs

### 1.7 Design Premium
- ✅ Meilleure hiérarchie visuelle
- ✅ Meilleure typographie
- ✅ Meilleure respiration
- ✅ Meilleures cartes
- ✅ Lecteur premium
- ✅ Mini player premium

---

## 2. ARCHITECTURE UI FINALE

```
┌─────────────────────────────────────────────────────┐
│                    APP SHELL                         │
├─────────────────────────────────────────────────────┤
│  PAGE CONTENT                                        │
│  ├── TodayPage (Accueil)                             │
│  ├── PlayerPage (Grand Lecteur Premium)             │
│  │   ├── Header + Navigation                        │
│  │   ├── Lecteur Principal                          │
│  │   │   ├── Image réciteur                         │
│  │   │   ├── Infos (sourate, réciteur, verset)     │
│  │   │   ├── Progress bar                           │
│  │   │   └── Controls (play/pause, prev/next)      │
│  │   └── Liste réciteurs                            │
│  ├── ReadingPage (Lecture Coran Pro)                 │
│  │   ├── Toolbar (recherche, sourate, langue)      │
│  │   ├── Mode selector (Arabe/Trad/Phono)          │
│  │   └── Versets (design premium)                   │
│  ├── ReadingPlanPage                                │
│  ├── BookmarksPage                                  │
│  └── SettingsPage                                   │
├─────────────────────────────────────────────────────┤
│  MINI PLAYER (si audioStarted)                      │
│  ├── Image réciteur                                  │
│  ├── Infos (sourate, réciteur, verset)              │
│  └── Controls (play/pause)                          │
├─────────────────────────────────────────────────────┤
│  BOTTOM NAV                                          │
└─────────────────────────────────────────────────────┘
```

---

## 3. SYNCHRONISATION AUDIO

### 3.1 État Global (App.jsx)
```javascript
// État centralisé pour l'audio
const [audioState, setAudioState] = useState({
  isPlaying: false,
  isReady: false,
  error: null,
  currentTime: 0,
  duration: 0,
});
```

### 3.2 Changement de Sourate
```
1. Sauvegarder isPlaying dans un ref (wasPlayingRef)
2. Changer currentSurahNumber
3. Charger nouvelle source audio
4. Si wasPlayingRef.current: play()
5. Sinon: keep paused
```

### 3.3 Mini Player Sync
- Utilise les mêmes props que PlayerPage
- callbacks pointent vers les mêmes fonctions
- État sync automatique via props

---

## 4. FICHIERS À MODIFIER

| Fichier | Description |
|---------|-------------|
| `src/App.jsx` | State management audio, sync, navigation |
| `src/components/PlayerPage.jsx` | Grand lecteur premium complet |
| `src/components/MiniPlayer.jsx` | Mini player premium sync |
| `src/components/ReadingPage.jsx` | Mode lecture pure |
| `src/components/VerseCard.jsx` | Design Coran Pro |
| `src/styles/createStyles.js` | Styles premium |

---

## 5. DÉTAILS IMPLEMENTATION

### 5.1 Grand Lecteur (PlayerPage)
```
┌─────────────────────────────────────────┐
│  🎧  Lecteur Audio           ← Retour  │
├─────────────────────────────────────────┤
│  ┌─────────┐                            │
│  │  PHOTO  │  {sourate name}           │
│  │ RECITER │  {reciter name}          │
│  │  120px  │  Verset {n} sur {total}   │
│  └─────────┘                            │
├─────────────────────────────────────────┤
│  ●━━━━━━━━━━━○  12:34 / 45:67           │
├─────────────────────────────────────────┤
│      ⏮      ▶/⏸      ⏭                │
├─────────────────────────────────────────┤
│  ← Sourate précédente | Sourate suivante →│
└─────────────────────────────────────────┘

Récitateurs:
┌─────────┐ ┌─────────┐ ┌─────────┐
│  PHOTO  │ │  PHOTO  │ │  PHOTO  │
│  Nom    │ │  Nom    │ │  Nom    │
│  ▶ Jouer│ │  ▶ Jouer│ │  ▶ Jouer│
└─────────┘ └─────────┘ └─────────┘
```

### 5.2 Mini Player
```
┌─────────────────────────────────────────────────┐
│ 🎵 {sourate} - {reciter}          ▶/⏸   ✕    │
│    Verset {n}                                │
└─────────────────────────────────────────────────┘
```

### 5.3 Page Lecture
```
┌─────────────────────────────────────────────────┐
│  📖 Al-Fatihah                    ⚙️ Mode     │
├─────────────────────────────────────────────────┤
│  [Recherche] [Sourate ▼] [Langue ▼] [🔤]     │
├─────────────────────────────────────────────────┤
│  Mode: [Arabe] [Arabe+Trad] [Complet]          │
├─────────────────────────────────────────────────┤
│  ┌─1─┐  بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِیمِ   │
│  │   │  "Au nom d'Allah, le Clément..."        │
│  └────────────────────────────────────────────┘│
│  ┌─2─┐  ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِینَ   │
│  │   │  "Louange à Allah, Seigneur des mondes" │
│  └────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

---

## 6. STYLE PREMIUM

### 6.1 Principes
- **Typographie**: Inter, 16-20px base
- **Cartes**: border-radius 24-32px
- **Espacement**: gap 16-24px
- **Ombres**: box-shadow subtiles
- **Images**: border-radius 16-24px
- **Boutons**: border-radius 12-16px
- **Gradients**: accents subtils

### 6.2 Couleurs (thème sand example)
- Background: gradient #faf7f2 → #f3ede3
- Cards: rgba(255,255,255,0.88)
- Accent: #8b5e34
- Text: #1f2937
- Muted: #6b7280

---

## 7. PROCÉDURE DE MISE EN ŒUVRE

### Étape 1: Styles Premium
- Modifier createStyles.js

### Étape 2: Mini Player Premium
- Modifier MiniPlayer.jsx

### Étape 3: Grand Lecteur Premium
- Modifier PlayerPage.jsx

### Étape 4: Page Lecture
- Modifier ReadingPage.jsx

### Étape 5: App.jsx
- Refaire state management audio
- Synchronisation

---

## 8. VALIDATION

Après chaque étape:
- [ ] Audio fonctionne
- [ ] Sync grand ↔ mini player
- [ ] Design premium
- [ ] Traductions visibles
- [ ] Navigation fonctionnelle

