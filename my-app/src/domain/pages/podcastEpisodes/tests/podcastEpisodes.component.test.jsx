import { render, screen, fireEvent } from "@testing-library/react";
import { PodcastEpisodesComponent } from "../PodcastEpisodes.component";
import { BrowserRouter } from "react-router-dom";
import { PodcastContext } from "../../../contexts/Podcast.context";
jest.mock("../../../hooks/useInputAutocomplete.hook", () => ({
  useInputAutocomplete: () => {
    return {
      resultsSearch: dataMockEpisodes,
      setResultsSearch: jest.fn(),
      textSearchInput: "",
      setTextSearchInput: jest.fn(),
    };
  },
}));

const isLoading = false;
const setIsLoading = jest.fn();
const episodes = {};
const setEpisodes = jest.fn();
const episode = {};
const setEpisode = jest.fn();
const audioRef = {
    current: undefined
};
const isPlaying = false;
const setIsPlaying = jest.fn();

describe("podcastDetail tests", () => {
  test("renders table and click in episode", () => {
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
          <PodcastEpisodesComponent />
        </PodcastContext.Provider>
      </BrowserRouter>
    );
    const buttonPlay = screen.getAllByLabelText("Play")[1];
    fireEvent.click(buttonPlay);
    expect(setEpisode).toHaveBeenCalled();
    expect(setEpisode).toHaveBeenCalledWith(dataMockEpisodes[0]);
    expect(setIsPlaying).toHaveBeenCalled();
    expect(setIsPlaying).toHaveBeenCalledWith(true);
  });
});

const dataMockEpisodes = [
  {
    country: "USA",
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    trackTimeMillis: 13958000,
    episodeUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_670.mp3?dest-id=2422538",
    artworkUrl160:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
    contentAdvisoryRating: "Explicit",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/episode-670-burnt-muffins/id1535809341?i=1000632908275&uo=4",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
    artistViewUrl:
      "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
    previewUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_670.mp3?dest-id=2422538",
    closedCaptioning: "none",
    collectionId: 1535809341,
    collectionName: "The Joe Budden Podcast",
    artistIds: [1535844019],
    description:
      "The JBP kicks off this episode with a recap of Cesar Pina breaking his silence by going live on Instagram (33:27) before the Bionic Six turns to Dwight Howard addressing the latest news surrounding his sexuality (45:34). With October 31st around the corner, the room discusses Halloween 2023 (1:18:02), Brent Faiyaz drops his new project ‘Larger Than Life’ (1:31:40), and Tyla performs ‘Water’ on Late Night with Jimmy Fallon which leads to a conversation on artists crafting music while simultaneously balancing the business (1:45:12). Also, the Milli Vanilli documentary is out on Paramount+ (1:54:03), An update on the Jonathan Majors case after his ex-girlfriend was arrested (2:37:45), Rumors of Jada Pinkett Smith’s book flopping (2:43:17), City Girls address their low record sales (2:50:36), Part of the Show (3:02:56), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | Yebba (feat. Sweata) - “Waterfall (I Adore You)”\n Ice | GloRilla & CMG The Label - “Overstood”\n Parks | Chill Moody (feat. Maggie & Hiruy Tirfe) - “Horns At the Funeral”\n Ish | Rema - “Don’t Leave”",
    feedUrl: "https://jbpod.libsyn.com/applepodcast",
    releaseDate: "2023-10-28T07:00:00Z",
    trackId: 1000632908275,
    trackName: 'Episode 670 | "Burnt Muffins"',
    shortDescription:
      "The JBP kicks off this episode with a recap of Cesar Pina breaking his silence by going live on Instagram (33:27) before the Bionic Six turns to Dwight Howard addressing the latest news surrounding his sexuality (45:34). With October 31st around the...",
    genres: [
      {
        name: "Music",
        id: "1310",
      },
    ],
    episodeGuid: "ea632df1-eaa6-4d95-a061-e4e026d12c56",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
];
