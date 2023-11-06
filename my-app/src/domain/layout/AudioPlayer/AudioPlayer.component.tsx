import styled from "styled-components";
import AudioControl from "../AudioControl/AudioControl.component";
import { getDuration } from "../../utils/utils";
import useAudioPlayerHooks from "../../hooks/useAudioPlayer.hooks";
import { useContext } from "react";
import { PodcastContext } from "../../contexts/Podcast.context";
import {
  AudioPlayerContainerWrapperStyled,
  AudioPlayerContainerStyled,
  AudioInfoEpisodeContainerStyled,
  AudioInfoEpisodeImgStyled,
  AudioInfoTextContainerStyled,
  AudioInfoH2Styled,
  AudioInfoParragraphStyled,
  AudioInputsContainerStyled,
  AudioInputTrackContainerStyled,
  AudioInputTrackProgressStyled,
  AudioVolumeContainerStyled,
  AudioVolumeTrackContainerStyled,
  InputVolumeTrackStyled,
} from "./audioPlayer.component.styled";
import { formatTimeAudio } from "../../utils/utils";

export default function AudioPlayerComponent({ episode }: any) {
  const { audioRef, isPlaying, setIsPlaying, episodes }: any =
    useContext(PodcastContext);

  const {
    trackIndex,
    trackProgress,
    duration,
    volume,
    currentPercentage,
    setVolume,
    onScrub,
    onScrubEnd,
    toPrevTrack,
    toNextTrack,
  } = useAudioPlayerHooks({
    audioRef,
    isPlaying,
    setIsPlaying,
    episode,
    episodes,
  });

  const handleMuteUnmute = () => {
    if (!audioRef?.current) return;
    if (audioRef?.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };
  return (
    <>
      {episode?.episodeUrl !== "" && (
        <AudioPlayerContainerWrapperStyled>
          <AudioPlayerContainerStyled>
            <AudioInfoEpisodeContainerStyled>
              <AudioInfoEpisodeImgStyled src={episode?.artworkUrl60} />
              <AudioInfoTextContainerStyled>
                <AudioInfoH2Styled>{episode?.trackName}</AudioInfoH2Styled>
                <AudioInfoParragraphStyled>
                  {episode?.collectionName}
                </AudioInfoParragraphStyled>
              </AudioInfoTextContainerStyled>
            </AudioInfoEpisodeContainerStyled>
            <AudioControl
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
            />
            <AudioInputsContainerStyled>
              <AudioInputTrackContainerStyled>
                <p style={{ color: "white" }}>
                  {audioRef.current &&
                    formatTimeAudio(audioRef.current?.currentTime)}
                </p>
                <AudioInputTrackProgressStyled
                  currentPercentage={currentPercentage}
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : "0"}
                  className="progress"
                  onChange={(e) => onScrub(e.target.value)}
                  onMouseUp={onScrubEnd}
                  onKeyUp={onScrubEnd}
                />
                <p style={{ color: "white" }}>
                  {audioRef.current && getDuration(episode)}
                </p>
              </AudioInputTrackContainerStyled>

              <AudioVolumeTrackContainerStyled>
                <AudioVolumeContainerStyled onClick={handleMuteUnmute}>
                  <img src="../assets/volume.svg"></img>
                </AudioVolumeContainerStyled>
                <InputVolumeTrackStyled
                  volume={volume}
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e: any) => setVolume(e.target.value)}
                />
              </AudioVolumeTrackContainerStyled>
            </AudioInputsContainerStyled>
          </AudioPlayerContainerStyled>
        </AudioPlayerContainerWrapperStyled>
      )}
    </>
  );
}
