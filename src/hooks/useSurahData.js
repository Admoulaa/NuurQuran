import { useEffect, useRef, useState } from "react";
import { fetchJson } from "../utils/helpers";
import { LANGUAGES } from "../data/constants";

export function useSurahData(currentSurahNumber, language) {
  const cacheRef = useRef({});
  const [state, setState] = useState({ loading: false, error: "", data: null });

  useEffect(() => {
    const cacheKey = `${currentSurahNumber}-${language}`;
    if (cacheRef.current[cacheKey]) {
      setState({ loading: false, error: "", data: cacheRef.current[cacheKey] });
      return;
    }

    const controller = new AbortController();

    async function load() {
      setState((prev) => ({ ...prev, loading: true, error: "" }));
      try {
        const [arabicJson, translationJson, translitJson] = await Promise.all([
          fetchJson(
            `https://api.alquran.cloud/v1/surah/${currentSurahNumber}/quran-uthmani`,
            controller.signal
          ),
          fetchJson(
            `https://api.alquran.cloud/v1/surah/${currentSurahNumber}/${LANGUAGES[language].edition}`,
            controller.signal
          ),
          fetchJson(
            `https://api.alquran.cloud/v1/surah/${currentSurahNumber}/en.transliteration`,
            controller.signal
          ),
        ]);

        const arabicAyahs = arabicJson?.data?.ayahs || [];
        const translationAyahs = translationJson?.data?.ayahs || [];
        const translitAyahs = translitJson?.data?.ayahs || [];

        const merged = {
          ayahs: arabicAyahs.map((ayah, index) => ({
            numberInSurah: ayah.numberInSurah,
            arabic: ayah.text,
            transliteration: translitAyahs[index]?.text || "",
            translations: {
              [language]: translationAyahs[index]?.text || "",
            },
          })),
        };

        cacheRef.current[cacheKey] = merged;
        setState({ loading: false, error: "", data: merged });
      } catch (error) {
        if (error.name === "AbortError") return;
        setState({
          loading: false,
          error: "Impossible de charger cette sourate pour le moment.",
          data: null,
        });
      }
    }

    load();
    return () => controller.abort();
  }, [currentSurahNumber, language]);

  return state;
}

