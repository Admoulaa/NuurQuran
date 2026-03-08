import { useState, useRef, useCallback, useEffect } from "react";

/**
 * useAudioPlayer - Hook minimal pour la lecture audio
 * Responsabilité unique : contrôler la lecture audio
 * NE gère PAS les timings ou le suivi de verset
 */
export function useAudioPlayer(audioRef) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);

  // Garder une référence stable du ref audio
  const audioElementRef = useRef(null);

  useEffect(() => {
    audioElementRef.current = audioRef.current;
  }, [audioRef]);

  // Handlers d'événements audio
  const handleCanPlay = useCallback(() => {
    setIsReady(true);
    setError("");
  }, []);

  const handlePlaying = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleError = useCallback(() => {
    setError("Erreur de chargement audio");
    setIsReady(false);
    setIsPlaying(false);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  // Setup des listeners une seule fois
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef, handleCanPlay, handlePlaying, handlePause, handleEnded, handleError, handleLoadedMetadata]);

  // Méthodes publiques
  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !isReady) return;
    
    try {
      setError("");
      await audio.play();
    } catch (e) {
      setError("Impossible de lancer la lecture");
    }
  }, [audioRef, isReady]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (audio) audio.pause();
  }, [audioRef]);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const seekTo = useCallback((timeInSeconds) => {
    const audio = audioRef.current;
    if (audio && isReady) {
      audio.currentTime = timeInSeconds;
    }
  }, [audioRef, isReady]);

  const getCurrentTime = useCallback(() => {
    return audioRef.current?.currentTime || 0;
  }, [audioRef]);

  return {
    // État
    isPlaying,
    isReady,
    error,
    duration,
    // Actions
    play,
    pause,
    togglePlay,
    seekTo,
    getCurrentTime,
  };
}

