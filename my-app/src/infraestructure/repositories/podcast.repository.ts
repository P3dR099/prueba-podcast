import { http } from "../http/http";

export const PodcastRepository = {
    getPodcasts: async () => {
        const response = await http.get<any>('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        if (response.feed) {
            const podcasts = response.feed
            return podcasts;
        }
        throw new Error('Network response was not ok.');
    },
    getEpisodes: async (podcastId: any) => {
        const response = await http.get<any>(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
        if (response.results) {
            const episodes = response.results
            const episodesCount = response.resultsCount
            return {episodes, episodesCount};
        }
        throw new Error('Network response was not ok.');
    }
}