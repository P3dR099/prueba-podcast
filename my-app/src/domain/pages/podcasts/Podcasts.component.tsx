import React, { useEffect, useState, useContext } from "react";
import { podcastService } from "../../service/podcast.service";
import { useInputAutocomplete } from "../../hooks/useInputAutocomplete.hook";
import { PodcastContext } from "../../contexts/Podcast.context";
import BasicTable from "../../layout/ListTable/Table.component";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { formattedDate } from "../../utils/utils";
import TableHead from "@mui/material/TableHead";
import InputSearchComponent from "../../layout/InputSearch/InputSearch.component";
import { Podcast } from "../../models/Podcast";
import { Link } from "react-router-dom";
import { 
  H2NameStyled,
  ImgPlayStyled, 
  ImageArtistStyled,
  TableContainerNameArtistStyled,
  ParragraphDescStyled,
  PodcastsContainerStyled,
  ArtistNameStyled,
  TitlesContainerStyled,
  InputContainerStyled
   } from "./podcasts.component.styled";

export const PodcastsComponent: React.FC = () => {
  const { setIsLoading, isLoading }: any = useContext(PodcastContext);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const {
    resultsSearch,
    setResultsSearch,
    textSearchInput,
    setTextSearchInput,
  } = useInputAutocomplete(podcasts, "podcasts");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: any = await podcastService().getPodcasts();
        const data = await response.entry;
        setPodcasts(data);
        setResultsSearch(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    podcasts.length > 0 && setResultsSearch(podcasts);
  }, [podcasts]);

  const TableBodyComponent = () => {
    return (
      <TableBody aria-label="table body">
        {resultsSearch.map((row: any) => {
          return (
            <TableRow
              aria-label="row body"
              key={`${row.id.attributes["im:id"]}`}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                color: "white",
                textDecoration: "none",
              }}
            >
              <TableCell
                sx={{
                  color: "white",
                  width: "4%",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                }}
                scope="row"
              >
                <Link to={`/podcast/${row.id.attributes["im:id"]}`} style={{ color: 'white', textDecoration: 'none' }}>
                  <ImgPlayStyled src={"../assets/VectorplayIcon.svg"} />
                </Link>
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "16px",
                  width: "340px",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                }}
                size="medium"
                component="th"
                scope="row"
              >
                <Link to={`/podcast/${row.id.attributes["im:id"]}`} style={{ color: 'white', textDecoration: 'none' }}>
                  <TableContainerNameArtistStyled>
                    <ImageArtistStyled src={row["im:image"][0].label} />                    
                    <TitlesContainerStyled>
                      <H2NameStyled>{row.title.label.toUpperCase()}</H2NameStyled>
                      <ArtistNameStyled>{row['im:artist'].label}</ArtistNameStyled>
                    </TitlesContainerStyled>
                  </TableContainerNameArtistStyled>
                </Link>
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF4D",
                  maxWidth: "210px",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                  fontFamily: 'Quicksand'
                }}
                size="medium"
                component="th"
                scope="row"
                align="left"
              >
                <Link to={`/podcast/${row.id.attributes["im:id"]}`} style={{ color: '#FFFFFF4D', textDecoration: 'none' }}>
                  <ParragraphDescStyled>
                    {row.summary.label}
                  </ParragraphDescStyled>
                </Link>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  width: "15%",
                  borderBottom: "1px solid rgb(224 224 224 / 21%)",
                  color: 'rgba(255, 255, 255, 0.30)',
                  fontFamily: 'Quicksand',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  padding: '3px'
                }}
                align="left"
              >
                <Link to={`/podcast/${row.id.attributes["im:id"]}`} style={{ color: '#FFFFFF4D', textDecoration: 'none' }}>
                  {formattedDate(row["im:releaseDate"].label)}
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

  const constantsTableRow = {
    ex: "#",
    name: "Name",
    desc: "Description",
    rel: "Released",
  };

  const TableHeadComponent = (typeTable: any) => {
    return (
      <TableHead>
        <TableRow>
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
        </TableRow>
      </TableHead>
    );
  };

  return (
    <PodcastsContainerStyled>
      <InputContainerStyled>
        <InputSearchComponent
          textSearchInput={textSearchInput}
          setTextSearchInput={setTextSearchInput}
          />
      </InputContainerStyled>
      {!isLoading ? (
        <BasicTable
          data={resultsSearch}
          TableHeadComponent={TableHeadComponent}
          TableBodyComponent={TableBodyComponent}
        />
      ) : <p style={{ color: 'white' }}>loading...</p>
      }
    </PodcastsContainerStyled>
  );
};
