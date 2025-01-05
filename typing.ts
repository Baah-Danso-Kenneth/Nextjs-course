export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    release_date: string,
    id: number;
    original_language: string;
    original_title: string;
    popularity: number;
    overview: string;
    poster_path?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type Genre={
    id: number;
    name: string;
}

export type Genres = {
    genres: Genre[];
}

export type SearchResults = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}