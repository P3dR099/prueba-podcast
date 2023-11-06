import styled from "styled-components";

export const PostDetailContainerStyled = styled.div`
    justify-content: center;
    height: 100%;
`;

export const PodcastDetailTableWrapperStyled = styled.div`
    display: flex;
    justify-content: right;
    box-shadow: rgb(189 189 189 / 45%) 0px 2px 14px 0px;
    padding: 18px;
    @media (max-width: 425px) {
        overflow-x: auto;
        max-width: 100%;
    }
    @media (max-width: 1024px) {
        padding: 0;
    }
    max-height: 90vh;
    height: fit-content;
    overflow-x: auto;
    max-width: 100%;
`;

export const PostDetailContainerWrapperStyled = styled.div`
    // height: 100vh;
    max-width: 1150px;
    margin: auto;
`;


export const PodcastDetailEpisodesNumberStyled = styled.div`
    padding: 12px 20px;
    box-shadow: rgba(189, 189, 189, 0.45) 0px 2px 14px 0;
    margin-bottom: 30px;
`;

export const PodcastDetailEpisodesWrapperStyled = styled.div``;

export const PodcastDetailEpisodesNumberTitleStyled = styled.h2`
    margin: 0;
    display: flex;
`;

export const H2NameStyled = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  color: #FFF;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0;
`;

export const ImageArtistStyled = styled.img`
  border-radius: 8px;
  width: 45px;
  height: 45px;
  align-self: center;
`;

export const TableContainerNameArtistStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const ParragraphDescStyled = styled.p`
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  max-width: 100%;
  color: rgba(255, 255, 255, 0.30);
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
`;

export const PodcasDetailInfoPodcastContainerStyled = styled.div`
  margin-top: 36px;
  margin-bottom: 24px;
  height: 320px;
`;

export const PodcastDetailImgStyled = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 15px;
  max-width: 900px;
`;

export const PodcastDetailTitleStyled = styled.h2`
    margin: 0;
    color: #FFF;
    font-family: Quicksand;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
`;

export const ArtistTitleStyled = styled.p`
  margin-top: 0px;
  width: 272px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.30);
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ContainerTitlesStyled = styled.div``;

export const ButtonGoBackStyled = styled.button`
  background: #1A1A1A;
  color: white;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

export const InputContainerStyled = styled.div`
  display: flex;
  padding: 30px 0px 20px 20px;
  align-items: center;
  gap: 15px;
`;

export const PodcastDetailTitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PodcastDetailContainerStyled = styled.div`
  padding-bottom: 170px;
`;