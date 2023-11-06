import { PodcastRepository } from "../../infraestructure/repositories/podcast.repository";

export const podcastService = () => {
    return {
        getPodcasts: () => PodcastRepository.getPodcasts(),

        getPodcastEpisodes: (podcastId: any) => PodcastRepository.getEpisodes(podcastId)
    }
}