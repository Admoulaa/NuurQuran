import { useEffect, useState, useRef } from "react";

/**
 * useTimingData - Hook minimal pour récupérer les timings
 * Responsabilité unique : charger les timings depuis l'API
 * NE gère PAS la lecture audio
 */
export function useTimingData(selectedReciter, currentSurahNumber) {
  const [timings, setTimings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const cacheRef = useRef({});

  useEffect(() => {
    const controller = new AbortController();
    const cacheKey = `${selectedReciter.id}-${currentSurahNumber}`;
    
    // Vérifier le cache
    if (cacheRef.current[cacheKey]) {
      setTimings(cacheRef.current[cacheKey]);
      return;
    }

    async function load() {
      setLoading(true);
      setError("");
      
      try {
        // 1. Récupérer la liste des timings disponibles
        const readsRes = await fetch(
          "https://mp3quran.net/api/v3/ayat_timing/reads",
          { signal: controller.signal }
        );
        
        if (!readsRes.ok) throw new Error("Erreur réseau");
        
        const reads = await readsRes.json();
        
        // 2. Chercher le récitatuer correspondant
        const readId = findMatchingReadId(reads, selectedReciter);
        
        if (!readId) {
          setError("Timings non disponibles pour ce récitatuer");
          setTimings([]);
          return;
        }
        
        // 3. Charger les timings pour la sourate
        const timingRes = await fetch(
          `https://mp3quran.net/api/v3/ayat_timing?surah=${currentSurahNumber}&read=${readId}`,
          { signal: controller.signal }
        );
        
        if (!timingRes.ok) throw new Error("Erreur chargement timings");
        
        const timingData = await timingRes.json();
        
        // 4. Normaliser les timings
        const normalized = normalizeTimings(timingData);
        
        if (normalized.length > 0) {
          cacheRef.current[cacheKey] = normalized;
          setTimings(normalized);
        } else {
          setError("Aucun timing disponible pour cette sourate");
          setTimings([]);
        }
        
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Impossible de charger les timings");
        setTimings([]);
      } finally {
        setLoading(false);
      }
    }

    load();
    
    return () => controller.abort();
  }, [selectedReciter.id, currentSurahNumber, selectedReciter.name]);

  return {
    timings,
    loading,
    error,
    hasTimings: timings.length > 0,
  };
}

// Trouver l'ID de timing correspondant au récitatuer
function findMatchingReadId(reads, reciter) {
  if (!Array.isArray(reads)) return null;
  
  const reciterName = reciter.name.toLowerCase();
  
  // Chercher par alias
  if (reciter.timingAliases) {
    for (const alias of reciter.timingAliases) {
      const match = reads.find(r => 
        r.name && r.name.toLowerCase().includes(alias.toLowerCase())
      );
      if (match) return match.id;
    }
  }
  
  // Chercher par nom direct
  const directMatch = reads.find(r => 
    r.name && r.name.toLowerCase() === reciterName
  );
  if (directMatch) return directMatch.id;
  
  return null;
}

// Normaliser les données de timing
function normalizeTimings(data) {
  if (!Array.isArray(data)) return [];
  
  return data
    .map(item => ({
      verse: Number(item.ayah),
      startMs: Number(item.start_time),
      endMs: Number(item.end_time),
    }))
    .filter(item => 
      item.verse > 0 && 
      Number.isFinite(item.startMs) && 
      Number.isFinite(item.endMs)
    )
    .sort((a, b) => a.startMs - b.startMs);
}

