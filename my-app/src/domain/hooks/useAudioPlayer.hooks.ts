import { useContext, useEffect, useRef, useState } from "react";
import { PodcastContext } from "../contexts/Podcast.context";

export default function useAudioPlayerHooks ({audioRef, isPlaying, setIsPlaying, episode, episodes}: any) {

  const {setEpisode} = useContext(PodcastContext)
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const intervalRef = useRef<any>();
  const [volume, setVolume] = useState<number>(60);
  const isReady = useRef(false);
  const [trackIndex, setTrackIndex] = useState<any>(-1);
  const duration = audioRef.current?.duration;
  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";

  useEffect(() => {
    audioRef.current?.pause();
    if (episode?.trackName !== "") {
      const Audio2 = new Audio(episode?.episodeUrl);
      audioRef.current = Audio2;
      setIsPlaying(true)
    }
  }, [episode]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    setTrackIndex(episodes.indexOf(episode) - 1);
  };

  const toNextTrack = () => {
    setTrackIndex(episodes.indexOf(episode) + 1);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, episode]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current?.pause();
    setTrackProgress(audioRef.current?.currentTime);
    trackIndex !== -1 && setEpisode(episodes[trackIndex])
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      episode?.episodeUrl !== "" && (isReady.current = true);
    }
  }, [trackIndex]);


  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef.current]);

  return {
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying,
    audioRef: audioRef,
    trackIndex: trackIndex,
    trackProgress: trackProgress,
    duration: duration,
    volume: volume,
    currentPercentage: currentPercentage,
    setVolume: setVolume,
    onScrub: onScrub,
    onScrubEnd: onScrubEnd,
    toPrevTrack: toPrevTrack,
    toNextTrack: toNextTrack
  }

}