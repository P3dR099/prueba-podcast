import { useRef, useState } from "react";
import { Episode } from "./domain/models/Episode";
import { Routes } from "react-router-dom";
import { PodcastContext } from "./domain/contexts/Podcast.context";
import appRoutes from "./domain/routes/app.routes";
import AudioPlayerComponent from "./domain/layout/AudioPlayer/AudioPlayer.component";
import Layout from "./domain/layout/Layout";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [episode, setEpisode] = useState<Episode>({
    artistIds: [],
    artistViewUrl: '',
    artworkUrl60: '',
    artworkUrl160: '',
    artworkUrl600: '',
    closedCaptioning: '',
    collectionId: 0,
    collectionName: '',
    collectionViewUrl: '',
    contentAdvisoryRating: '',
    country: '',
    description: '',
    episodeContentType: '',
    episodeFileExtension: '',
    episodeGuid: '',
    episodeUrl: '',
    feedUrl: '',
    genres: [{name: '', id: ''}],
    kind: '',
    previewUrl: '',
    releaseDate: '',
    shortDescription: '',
    trackId: 0,
    trackName: '',
    trackTimeMillis: 0,
    trackViewUrl: '',
    wrapperType: '',
  });
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<any>();

  return (
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
      <div className="App">
        <Layout>
          <Routes>{appRoutes()}</Routes>
          <AudioPlayerComponent 
            episode={episode}
          />
        </Layout>
      </div>
    </PodcastContext.Provider>
  );
}

export default App;
