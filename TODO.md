# TODO - Intégration le-coran.com ✅ TERMINÉ

## Objectif
Utiliser le-coran.com comme source audio principale:
- Audio COMPLET: le-coran.com (tous récitants)
- Audio par verset: le-coran.com pour Alafasy, fallback mp3quran.net

## Étapes d'implémentation

### 1. Mettre à jour constants.js ✅
- [x] Ajouter la nouvelle source le-coran.com pour l'audio complet
- [x] Ajouter le mapping des récitants pour le-coran.com

### 2. Créer helper pour URL audio par verset ✅
- [x] Fonction pour générer URL audio par verset (le-coran.com pour Alafasy)
- [x] Fallback vers mp3quran.net si récitant != Alafasy

### 3. Mettre à jour App.jsx ✅
- [x] Utiliser la nouvelle source pour l'audio complet
- [x] Intégrer le helper pour les URLs par verset

### 4. Tester ✅
- [x] Vérifier que l'audio complet fonctionne
- [x] Vérifier que l'audio par verset fonctionne

