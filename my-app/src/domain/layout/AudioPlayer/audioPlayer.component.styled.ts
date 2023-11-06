import styled from "styled-components";

export const AudioStyled = styled.audio<any>``;
export const ContainerAudioStyled = styled.div``;
export const AudioPlayerContainerWrapperStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
`;

export const AudioInfoEpisodeContainerStyled = styled.div`
  display: flex;
  gap: 30px;
  width: 40%;
`;

export const AudioInfoEpisodeImgStyled = styled.img`
  width: 110px;
`;

export const AudioInfoTextContainerStyled = styled.div`
  color: white;
  min-width: 300px;
  align-self: center;
  text-align: left;
`;

export const AudioInfoH2Styled = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  color: #FFF;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const AudioInfoParragraphStyled = styled.p`
  color: rgba(255, 255, 255, 0.30);
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const AudioInputsContainerStyled = styled.div`
  width: 45%;
  display: flex;
  gap: 58px;
`;

export const AudioInputTrackContainerStyled = styled.div`
  width: 75%;
  display: flex;
  gap: 9px;
  align-items: center;
`;

export const AudioPlayerContainerStyled = styled.div`
  display: flex;
  height: 110px;
  align-items: center;
  padding-right: 40px;
`;

export const AudioInputTrackProgressStyled = styled.input<{
  currentPercentage: any;
}>`
  -webkit-appearance: none;
  width: 90%;
  height: 9px;
  background-color: rgb(229 229 229 / 44%);
  border-radius: 5px;
  background-size: ${({ currentPercentage }) => currentPercentage} 100%;
  background-image: linear-gradient(rgb(255 255 255), rgb(255 255 255));
  background-repeat: no-repeat;
  margin-right: var(--space);


::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: all .1s;
  background-color: rgb(255 255 255);
}

::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: all .1s;
  background-color: rgb(255 255 255);
}

::-ms-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: all .1s;
  background-color: rgb(255 255 255);
}

:hover::-webkit-slider-thumb {
  opacity: 1;
}

:hover::-moz-range-thumb {
  opacity: 1;
}

:hover::-ms-thumb {
  opacity: 1;
}

::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

`;

export const AudioVolumeContainerStyled = styled.div`
  align-self: center;
`;

export const AudioVolumeTrackContainerStyled = styled.div`
  display: flex;
  gap: 9px;
`;

export const InputVolumeTrackStyled = styled.input<{volume: number}>`
  -webkit-appearance: none;
  height: 9px;
  background-color: rgb(229 229 229 / 44%);
  border-radius: 5px;
  background-size: ${({ volume }) => volume.toString() + '%'} 100%;
  background-image: linear-gradient(rgb(255 255 255), rgb(255 255 255));
  background-repeat: no-repeat;
  margin-right: var(--space);
  align-self: center;
  margin-bottom: 9px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: all .1s;
    background-color: rgb(255 255 255);
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    cursor: pointer;
    opacity: 1;
    transition: all .1s;
    background-color: rgb(255 255 255);
  }

  ::-ms-thumb {
    -webkit-appearance: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    cursor: pointer;
    opacity: 1;
    transition: all .1s;
    background-color: rgb(255 255 255);
  }

  :hover::-webkit-slider-thumb {
    opacity: 1;
  }

  :hover::-moz-range-thumb {
    opacity: 1;
  }

  :hover::-ms-thumb {
    opacity: 1;
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;