export type Episode = {
    artistIds: Array<number>
    artistViewUrl: string
    artworkUrl60: string
    artworkUrl160: string
    artworkUrl600: string
    closedCaptioning: string
    collectionId: number
    collectionName: string
    collectionViewUrl: string
    contentAdvisoryRating: string
    country: string
    description: string
    episodeContentType: string
    episodeFileExtension: string
    episodeGuid: string
    episodeUrl: string 
    feedUrl: string
    genres: Array<{name: string, id: string}>
    kind: string
    previewUrl: string
    releaseDate: string
    shortDescription: string
    trackId: number
    trackName: string
    trackTimeMillis: number
    trackViewUrl: string
    wrapperType: string
} 