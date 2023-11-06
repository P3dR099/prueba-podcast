import styled from "styled-components";
import {
  ButtonPrevStyled,
  ButtonPauseStyled,
  ButtonNextStyled,
  ButtonPlayStyled,
  ImgPreviousStyled,
  ImgPauseStyled,
  ImgNextStyled,
  ImgPlayStyled,
} from "./audioControl.component.styled";
import { useContext } from "react";
import { PodcastContext } from "../../contexts/Podcast.context";
import ButtonPlayPauseComponent from "../ButtonPlayPause/ButtonPlayPause.component";

export const AudioControlsContainerStyled = styled.div`
  width: 20%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonRandomStyled = styled.button`
  background: transparent;
  border: none;
`;

export const ButtonReplayStyled = styled.button`
  background: transparent;
  border: none;
`;

export default function AudioControl({
  isPlaying,
  onPrevClick,
  onNextClick,
}: any) {

  const {episodes, episode, audioRef, setIsPlaying}: any = useContext(PodcastContext)
  
  return (
    <AudioControlsContainerStyled>
      <ButtonRandomStyled>
        <img src={"../assets/selectRandom.svg"} />
      </ButtonRandomStyled>
      <ButtonPrevStyled
        type="button"
        className="prev"
        aria-label="Previous"
        disabled={episodes.indexOf(episode) === 0}
        onClick={onPrevClick}
      >
        <ImgPreviousStyled src={"../assets/step-previous.png"} />
      </ButtonPrevStyled>
      <ButtonPlayPauseComponent row={episode} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} type={'player'} />
      <ButtonNextStyled
        type="button"
        className="next"
        aria-label="Next"
        disabled={episodes.indexOf(episode) === episodes.length - 1}
        onClick={onNextClick}
      >
        <ImgNextStyled src={"../assets/step-forward.png"} />
      </ButtonNextStyled>

      <ButtonReplayStyled>
        <ImgNextStyled src={"../assets/replay.png"} />
      </ButtonReplayStyled>
    </AudioControlsContainerStyled>
  );
}
