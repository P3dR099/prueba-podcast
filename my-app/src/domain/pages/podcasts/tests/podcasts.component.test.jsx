import {
  render,
  screen,
  fireEvent,
  getByPlaceholderText,
  queryByPlaceholderText,
} from "@testing-library/react";
import { PodcastsComponent } from "../Podcasts.component";
import { PodcastContext } from "../../../contexts/Podcast.context";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

jest.mock("../../../hooks/useInputAutocomplete.hook", () => ({
  useInputAutocomplete: () => {
    return {
      resultsSearch: dataPodcastFake,
      setResultsSearch: jest.fn(),
      textSearchInput: "",
      setTextSearchInput: jest.fn(),
    };
  },
}));

describe("Podcasts tests", () => {

  const isLoading = false;
  const setIsLoading = jest.fn();
  const episodes = {};
  const setEpisodes = jest.fn();
  const episode = {};
  const setEpisode = jest.fn();
  const audioRef = null;
  const isPlaying = false;
  const setIsPlaying = false;

  test("should render table", async () => {
    render(
      <BrowserRouter>
        <PodcastContext.Provider
          value={{
            isLoading: isLoading,
            setIsLoading: setIsLoading,
            episodes: episodes,
            setEpisodes: setEpisodes,
            episode: episode,
            setEpisode: setEpisode,
            audioRef: audioRef,
            isPlaying: isPlaying,
            setIsPlaying: setIsPlaying,
          }}
        >
          <PodcastsComponent />
        </PodcastContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByLabelText("row body").length).toBe(
      dataPodcastFake.length
    );
  });

  test('should change current location when row is clicked', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <PodcastsComponent />
      </Router>
    );
    const element = screen.getAllByRole('link')[0];
    fireEvent.click(element);
    expect(history.location.pathname).toBe(`/podcast/${dataPodcastFake[0].id.attributes["im:id"]}`);
  });
});

export const dataPodcastFake = [
  {
    "im:name": {
      label: "The Joe Budden Podcast",
    },
    "im:image": [
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© All rights reserved",
    },
    title: {
      label: "The Joe Budden Podcast - The Joe Budden Network",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      attributes: {
        "im:id": "1535809341",
      },
    },
    "im:artist": {
      label: "The Joe Budden Network",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
      },
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
    "im:releaseDate": {
      label: "2023-10-25T00:00:00-07:00",
      attributes: {
        label: "October 25, 2023",
      },
    },
  },

  {
    "im:name": {
      label: "Class of '88 with Will Smith",
    },
    "im:image": [
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "In the US, hip hop reigns as the genre that influences every aspect of our culture. From fashion to film, the dominance of this prolific sound can be traced back to one year - 1988. From Public Enemy to The Fresh Prince, these twelve months gave rise to the superstars and styles that still resonate in songs released today. Through the unique perspective and personal experiences of Will Smith, Class of ’88 reveals the milestone moments, albums and artists that inspired a sonic evolution and secured 1988 as hip hop’s most important year. Rich with archival material, new interviews with hip hop’s biggest stars, and personal recollections from Will himself, Class of ’88 delivers fresh untold stories from the year that hip hop overcame the forces that were hell bent on blocking its rise.\nThis series features interviews and stories from the revolutionary Artists that impacted that year and many more afterwards, including: Queen Latifah, Jazzy Jeff, DMC, Salt-N-Pepa, Chuck D, Fab Five Freddy, Rakim, Slick Rick, DJ Red Alert, and Rick Rubin.\nListen to Class of '88 wherever you get your podcasts. You can binge the entire series, right now, on the Amazon Music App or Audible.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© 2023 Wondery, LLC. All rights reserved.",
    },
    title: {
      label: "Class of '88 with Will Smith - Audible | Wondery",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/class-of-88-with-will-smith/id1708275587?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/class-of-88-with-will-smith/id1708275587?uo=2",
      attributes: {
        "im:id": "1708275587",
      },
    },
    "im:artist": {
      label: "Audible | Wondery",
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
    "im:releaseDate": {
      label: "2023-10-26T00:00:00-07:00",
      attributes: {
        label: "October 26, 2023",
      },
    },
  },
];
