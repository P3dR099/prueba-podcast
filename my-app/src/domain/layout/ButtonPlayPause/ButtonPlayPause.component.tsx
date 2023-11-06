import { useContext, useEffect, useState } from "react";
import { ImgPlayRowStyled, ImgPauseRowStyled, ImgPlayStyled, ImgPauseStyled } from "./buttonPlayPause.component.styled";
import {
    ButtonPauseStyled,
    ButtonPlayStyled,
  } from "../AudioControl/audioControl.component.styled";
import { PodcastContext } from "../../contexts/Podcast.context";
import { useParams } from 'react-router-dom';

export default function ButtonPlayPauseComponent({row, setIsPlaying, isPlaying, type}: any) {
    const [currentSrc, setCurrentSrc] = useState('');
    const {audioRef}: any = useContext(PodcastContext)
    let { podcastId } = useParams();

    useEffect(() => {
        setCurrentSrc(audioRef.current?.src);
    }, [audioRef.current?.src]);

    const isButtonRow = isPlaying && currentSrc === row?.episodeUrl ? (
        <ButtonPauseStyled
        onClick={() => setIsPlaying(false)}
        aria-label="Pause"
        >
          <ImgPlayRowStyled src="../assets/angle-left.svg" />
        </ButtonPauseStyled>
      ) : (
        <ButtonPlayStyled
        onClick={() => setIsPlaying(true)}
        aria-label="Play"
        >
          <ImgPauseRowStyled src={"../assets/VectorplayIcon.svg"} />
        </ButtonPlayStyled>
    )

    const isNotButtonRow = isPlaying && Number(podcastId) === row?.collectionId ? (
        <ButtonPauseStyled
        onClick={() => setIsPlaying(false)}
        aria-label="Pause"
        >
          <ImgPauseStyled src="../assets/angle-left.svg" />
        </ButtonPauseStyled>
      ) : (
        <ButtonPlayStyled
        onClick={() => currentSrc && setIsPlaying(true)}
        aria-label="Play"
        >
          <ImgPlayStyled src={"../assets/VectorplayIcon.svg"} />
        </ButtonPlayStyled>
      )
    const buttonPlayer = isPlaying ? (
        <ButtonPauseStyled
        onClick={() => setIsPlaying(false)}
        aria-label="Pause"
        >
          <ImgPauseStyled src="../assets/angle-left.svg" />
        </ButtonPauseStyled>
      ) : (
        <ButtonPlayStyled
        onClick={() => currentSrc && setIsPlaying(true)}
        aria-label="Play"
        >
          <ImgPlayStyled src={"../assets/VectorplayIcon.svg"} />
        </ButtonPlayStyled>
      )
    
    return (
        <>
        {(() => {
        switch (type) {
          case 'row':
            return isButtonRow
          case 'player':
            return buttonPlayer
          default:
            return isNotButtonRow
        }
      })()}

        </>
    )
  }