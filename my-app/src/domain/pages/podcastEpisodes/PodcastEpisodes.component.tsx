import { useEffect, useRef, useState } from "react";
import { podcastService } from "../../service/podcast.service";
import { Episode } from "../../models/Episode";
import {
  PostDetailContainerStyled,
  PodcastDetailContainerStyled,
  PodcastDetailEpisodesWrapperStyled,
  PodcasDetailInfoPodcastContainerStyled,
  PodcastDetailTitleContainerStyled,
  PodcastDetailTitleStyled,
  PodcastDetailImgStyled,
  ButtonGoBackStyled,
  InputContainerStyled
} from "./podcastEpisodes.component.styled";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PodcastContext } from "../../contexts/Podcast.context";
import BasicTable from "../../layout/ListTable/Table.component";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { formattedDate, getDuration } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useInputAutocomplete } from "../../hooks/useInputAutocomplete.hook";
import InputSearchComponent from "../../layout/InputSearch/InputSearch.component";
import ButtonPlayPauseComponent from "../../layout/ButtonPlayPause/ButtonPlayPause.component";
import {
  H2NameStyled,
  ImageArtistStyled,
  TableContainerNameArtistStyled,
  ParragraphDescStyled,
  ArtistTitleStyled,
  ContainerTitlesStyled,
} from "./podcastEpisodes.component.styled";

export const PodcastEpisodesComponent: React.FC = () => {
  const {
    episode,
    episodes,
    setEpisodes,
    setEpisode,
    isLoading,
    setIsLoading,
    audioRef,
    isPlaying,
    setIsPlaying,
  }: any = useContext(PodcastContext);
  let navigate = useNavigate();

  const params = useParams();
  const { podcastId } = params;
  const {
    resultsSearch,
    setResultsSearch,
    textSearchInput,
    setTextSearchInput,
  } = useInputAutocomplete(episodes, "episodes");

  const [podcastInfo, setPodcastInfo] = useState<any>({})

  useEffect(() => {
    const fetchPodcastDetail = async () => {
      try {
        setIsLoading(true);
        const { episodes }: any = await podcastService().getPodcastEpisodes(
          podcastId
        );
        setPodcastInfo(episodes[0])
        setEpisodes(episodes.slice(1));
        setResultsSearch(episodes.slice(1));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPodcastDetail();
  }, [podcastId]);

  const constantsTableRow = {
    ex: "#",
    name: "Title",
    desc: "Topic",
    rel: "Released",
    duration: <img src="../assets/durationIcon.svg" />,
  };

  const TableRowComponent = ({ children }: any) => {
    return <TableRow>{children}</TableRow>;
  };

  const TableHeadComponent = ({ typeTable }: any) => {
    return (
      <TableHead>
        <TableRowComponent>
          <TableCell
            sx={{
              color: "white",
              borderBottom: "1px solid rgb(224 224 224 / 21%)",
            }}
          >
            {constantsTableRow.ex}
          </TableCell>
          <TableCell
            sx={{
              color: 'rgba(255, 255, 255, 0.30)',
              fontFamily: 'Quicksand',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              borderBottom: "1px solid rgb(224 224 224 / 21%)",
            }}
            align="left"
          >
            {constantsTableRow.name}
          </TableCell>
          <TableCell
            sx={{
              color: 'rgba(255, 255, 255, 0.30)',
              fontFamily: 'Quicksand',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              borderBottom: "1px solid rgb(224 224 224 / 21%)",
            }}
            align="left"
          >
            {constantsTableRow.desc}
          </TableCell>
          <TableCell
            sx={{
              color: 'rgba(255, 255, 255, 0.30)',
              fontFamily: 'Quicksand',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              borderBottom: "1px solid rgb(224 224 224 / 21%)",
            }}
            align="left"
          >
            {constantsTableRow.rel}
          </TableCell>
            <TableCell
              sx={{
                color: 'rgba(255, 255, 255, 0.30)',
                fontFamily: 'Quicksand',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                borderBottom: "1px solid rgb(224 224 224 / 21%)",
                textAlign: "center",
              }}
              align="left"
            >
              {constantsTableRow.duration}
            </TableCell>
        </TableRowComponent>
      </TableHead>
    );
  };

  const handleClickEpisode = (row: any) => {
    if (audioRef.current?.src !== "") {
      audioRef.current?.pause();
    }

    if (!isPlaying) {
      setIsPlaying(true);
    }
    setEpisode(row);
  };

  const TableBodyComponent = ({ typeTable }: any) => {

    return (
      <TableBody>
        {resultsSearch.map((row: Episode, key: number) => {
          return (
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                color: "white",
                textDecoration: "none",
              }}
              key={key}
            >
              <TableCell
                onClick={() => handleClickEpisode(row)}
                sx={{
                  color: "white",
                  width: "5%",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                  padding: "10px",
                }}
                component="th"
                scope="row"
              >
                <ButtonPlayPauseComponent row={row} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} type={'row'} />
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  minWidth: "360px",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                }}
                size="medium"
                component="th"
                scope="row"
              >
                <TableContainerNameArtistStyled>
                  <ImageArtistStyled src={row.artworkUrl60} />
                  <ContainerTitlesStyled>
                    <H2NameStyled>{row.trackName}</H2NameStyled>
                    <ArtistTitleStyled>{podcastInfo.artistName}</ArtistTitleStyled>
                  </ContainerTitlesStyled>
                </TableContainerNameArtistStyled>
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF4D",
                  minWidth: "145px",
                  maxWidth: "258px",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                }}
                size="medium"
                component="th"
                scope="row"
                align="left"
              >
                <ParragraphDescStyled>
                  {row.shortDescription !== ""
                    ? row.shortDescription
                    : row.description}
                </ParragraphDescStyled>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  color: "#FFFFFF4D",
                  width: "16%",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                }}
                align="left"
              >
                {formattedDate(row.releaseDate)}
              </TableCell>

              {typeTable === "tablePodcast" && (
                <TableCell
                  sx={{
                    fontSize: "16px",
                    color: "#FFFFFF4D",
                    width: "12%",
                    borderBottom: "1px solid rgb(224 224 224 / 21%)",
                  }}
                  align="center"
                >
                  {getDuration(row)}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

  return (
    <PodcastDetailContainerStyled>
      <InputContainerStyled>
        <ButtonGoBackStyled
          type="button"
          onClick={() => navigate('/')}
          aria-label="Go back"
          >
          <img src="../assets/goBack.svg"></img>
        </ButtonGoBackStyled>
        <InputSearchComponent
          textSearchInput={textSearchInput}
          setTextSearchInput={setTextSearchInput}
          />
        </InputContainerStyled>
        <PostDetailContainerStyled>
          <PodcastDetailEpisodesWrapperStyled>
            <PodcasDetailInfoPodcastContainerStyled>
              <PodcastDetailImgStyled src={podcastInfo.artworkUrl600} />
              <PodcastDetailTitleContainerStyled>
                <ButtonPlayPauseComponent row={episode} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                <PodcastDetailTitleStyled> {podcastInfo.trackName} </PodcastDetailTitleStyled>
                <div></div>
              </PodcastDetailTitleContainerStyled>
            </PodcasDetailInfoPodcastContainerStyled>
            {!isLoading ? (
                <BasicTable
                  data={episodes}
                  TableHeadComponent={TableHeadComponent}
                  TableBodyComponent={TableBodyComponent}
                  typeTable={"tablePodcast"}
                />
            ) : <p style={{ color: 'white' }}>loading...</p>}
          </PodcastDetailEpisodesWrapperStyled>
        </PostDetailContainerStyled>
    </PodcastDetailContainerStyled>
  );
};
