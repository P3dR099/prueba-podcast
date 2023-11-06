import React from "react";
import { Episode } from "../models/Episode";

type PodcastContextType = {
    episode: Episode
    setEpisode: Function
    episodes: Episode[]
    setEpisodes: Function
    isLoading: boolean
    setIsLoading: Function
    audioRef: Object,
    isPlaying: boolean,
    setIsPlaying: Function,
}

export const PodcastContext = React.createContext<PodcastContextType>({ 
    episode: {
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
    },
    setEpisode: Function,
    episodes: [],
    setEpisodes: Function,
    isLoading: false,
    setIsLoading: Function,
    audioRef: {},
    isPlaying: false, 
    setIsPlaying: Function,
});