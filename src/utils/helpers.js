import { RECITER_VERSE_SERVERS, RECITER_MAPPING } from "../data/constants";

/**
 * Helpers audio - Fonctions pures pour l'audio
 */

// ============================================
// AUDIO PAR VERSET - mp3quran.net
// ============================================

export function getVerseAudioUrl(surahNumber, verseNumber, reciterId) {
  if (SURAH_UNAVAILABLE[reciterId]?.includes(surahNumber)) {
    return null;
  }
  
  const verse = padSurah(verseNumber);
  const verseServer = RECITER_VERSE_SERVERS[reciterId];
  
  if (verseServer) {
    return `${verseServer.server}${verseServer.path}${verse}.mp3`;
  }
  
  return `https://server8.mp3quran.net/afs/${verse}.mp3`;
}

export function hasPerVerseAudio(reciterId, surahNumber) {
  if (SURAH_UNAVAILABLE[reciterId]?.includes(surahNumber)) {
    return false;
  }
  return !!RECITER_VERSE_SERVERS[reciterId];
}

// ============================================
// TIMINGS - Toutes les fonctions utilisent la clé "verse"
// ============================================

/**
 * Trouver le timing pour un verset spécifique
 * Clé utilisée : "verse" (format de useTimingData)
 */
export function findTimingForVerse(timings, verseNumber) {
  if (!timings) return null;
  return timings.find(t => t.verse === verseNumber) || null;
}

// Alias pour compatibilité — pointe vers findTimingForVerse
export const getTimingForVerse = findTimingForVerse;

/**
 * Trouver le verset actuel depuis le temps audio
 */
export function findCurrentVerse(timings, currentTimeMs) {
  if (!timings || timings.length === 0) return null;
  
  for (let i = 0; i < timings.length; i++) {
    const current = timings[i];
    const next = timings[i + 1];
    
    const startMs = current.startMs;
    const endMs = next ? next.startMs : current.startMs + 5000;
    
    if (currentTimeMs >= startMs && currentTimeMs < endMs) {
      return current.verse;
    }
  }
  
  return null;
}

/**
 * Recherche binaire du verset depuis le temps audio
 */
export function getVerseFromTime(timings, currentMs) {
  if (!timings || timings.length === 0) return null;

  let left = 0;
  let right = timings.length - 1;
  let result = null;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const timing = timings[mid];

    if (currentMs >= timing.startMs && currentMs <= timing.endMs) {
      return timing.verse;
    } else if (currentMs < timing.startMs) {
      right = mid - 1;
    } else {
      result = timing.verse;
      left = mid + 1;
    }
  }

  if (result !== null) return result;
  if (currentMs < timings[0].startMs) return timings[0].verse;
  return timings[timings.length - 1].verse;
}

export function isNearVerseEnd(timings, currentMs, marginMs = 150) {
  if (!timings || timings.length === 0) return false;
  const verse = getVerseFromTime(timings, currentMs);
  if (!verse) return false;
  const timing = findTimingForVerse(timings, verse);
  if (!timing) return false;
  return currentMs >= timing.endMs - marginMs;
}

export function isNearVerseStart(timings, currentMs, marginMs = 200) {
  if (!timings || timings.length === 0) return false;
  const verse = getVerseFromTime(timings, currentMs);
  if (!verse) return false;
  const timing = findTimingForVerse(timings, verse);
  if (!timing) return false;
  return currentMs <= timing.startMs + marginMs;
}

export function getNextVerse(timings, currentVerse) {
  if (!timings || timings.length === 0) return null;
  const currentTiming = findTimingForVerse(timings, currentVerse);
  if (!currentTiming) return null;
  const nextTiming = findTimingForVerse(timings, currentVerse + 1);
  return nextTiming ? currentVerse + 1 : null;
}

export function getVerseDuration(timings, verseNumber) {
  const timing = findTimingForVerse(timings, verseNumber);
  if (!timing) return 0;
  return timing.endMs - timing.startMs;
}

/**
 * Normalise des timings depuis une source externe vers le format { verse, startMs, endMs }
 */
export function normalizeTimingSource(timings) {
  if (!timings || !Array.isArray(timings)) return [];
  
  return timings
    .map((item) => {
      const verse = item.verse ?? item.ayah ?? item.verseNumber ?? 0;
      const startMs = item.startMs ?? item.start_time ?? item.start ?? 0;
      const endMs = item.endMs ?? item.end_time ?? item.end ?? 0;
      
      return {
        verse: Number(verse),
        startMs: Number(startMs),
        endMs: Number(endMs),
      };
    })
    .filter(
      (item) =>
        item.verse > 0 &&
        Number.isFinite(item.startMs) &&
        Number.isFinite(item.endMs) &&
        item.endMs > item.startMs
    )
    .sort((a, b) => a.startMs - b.startMs);
}

// ============================================
// Utils génériques
// ============================================

export function padSurah(number) {
  return String(number).padStart(3, "0");
}

export function formatSurahNumber(num) {
  return String(num).padStart(3, "0");
}

export function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' ]/g, "")
    .trim();
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function safeJsonParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function readLocalStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  return safeJsonParse(window.localStorage.getItem(key), fallback);
}

export function writeLocalStorage(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getDailyAyah() {
  const DAILY_AYAHS = [
    { arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "Certes, avec la difficulté vient la facilité.", ref: "Coran 94:5" },
    { arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا", translation: "Et dis : Seigneur, augmente-moi en savoir.", ref: "Coran 20:114" },
    { arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ", translation: "Souvenez-vous de Moi, Je me souviendrai de vous.", ref: "Coran 2:152" },
    { arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", translation: "Allah est avec les endurants.", ref: "Coran 2:153" },
  ];
  const dayIndex = Math.floor(Date.now() / 86400000) % DAILY_AYAHS.length;
  return DAILY_AYAHS[dayIndex];
}

export function fetchJson(url, signal) {
  return fetch(url, { signal }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  });
}