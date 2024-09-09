interface ErrorHandling {
    success: boolean;
    error?: {message: string};
}

interface ArtworksData {
    artworks: {title: string}[];
}

interface ArtistsData {
    artists: {name: string}[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handlerArtistsResponse = (resposne: ArtistsResponse) => {
    if (resposne.error) {
        console.log(resposne.error.message);
        return ;
    }

    console.log(resposne.artists);
}