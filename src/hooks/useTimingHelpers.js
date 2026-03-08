import { useCallback } from "react";

// ============================================
// CONSTANTES
// ============================================
export const SEEK_LOCK_DURATION_MS = 1200;
export const MIN_VERSE_CHANGE_INTERVAL_MS = 250;
export const VERSE_END_MARGIN_MS = 120;
export const LOOP_RESTART_COOLDOWN_MS = 220;

export function useTimingHelpers() {
  // Trouver l'index d'un verset dans les timings
  const getTimingIndexForVerse = useCallback((timings, verseNumber) => {
    return timings.findIndex((item) => item.ayah === verseNumber);
  }, []);

  // Obtenir le timing complet d'un verset
  const getTimingForVerse = useCallback((timings, verseNumber) => {
    const index = getTimingIndexForVerse(timings, verseNumber);
    return index >= 0 ? timings[index] : null;
  }, [getTimingIndexForVerse]);

  // Obtenir les bornes (début/fin) d'un verset
  const getVerseBounds = useCallback((timings, verseNumber) => {
    if (!timings || timings.length === 0) return null;

    const index = getTimingIndexForVerse(timings, verseNumber);
    if (index < 0) return null;

    const current = timings[index];
    const next = timings[index + 1] || null;

    const startMs = current.startMs;
    let endMs;
    if (typeof current.endMs === "number" && current.endMs > startMs) {
      endMs = current.endMs;
    } else if (next) {
      endMs = next.startMs;
    } else {
      endMs = current.startMs + 4000;
    }

    return {
      ayah: current.ayah,
      startMs,
      endMs,
      index,
    };
  }, [getTimingIndexForVerse]);

  // Trouver le verset correspondant à un temps
  const getVerseFromTime = useCallback((timings, currentMs) => {
    if (!timings || timings.length === 0) return null;

    if (currentMs <= timings[0].startMs) {
      return timings[0].ayah;
    }

    for (let i = 0; i < timings.length; i += 1) {
      const current = timings[i];
      const next = timings[i + 1] || null;
      const startMs = current.startMs;
      
      let endMs;
      if (typeof current.endMs === "number" && current.endMs > startMs) {
        endMs = current.endMs;
      } else if (next) {
        endMs = next.startMs;
      } else {
        endMs = Number.POSITIVE_INFINITY;
      }

      if (currentMs >= startMs && currentMs < endMs) {
        return current.ayah;
      }
    }

    return timings[timings.length - 1].ayah;
  }, []);

  // Synchroniser le verset suivi
  const syncTrackedVerse = useCallback((trackingRef, verseNumber) => {
    trackingRef.current.lastTrackedVerse = verseNumber;
    trackingRef.current.lastVerseChangeTime = Date.now();
  }, []);

  return {
    getTimingIndexForVerse,
    getTimingForVerse,
    getVerseBounds,
    getVerseFromTime,
    syncTrackedVerse,
  };
}

