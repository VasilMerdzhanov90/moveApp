const baseUrl = 'https://api.themoviedb.org/3';
const imageUrl = 'http://image.tmdb.org/t/p/w300';
const API_KEY = 'ca699f41df4cdcc6f6807864d5581587';
const urlMovieSearch = 'https://api.themoviedb.org/3/movie/';
const urlYouTube = 'https://www.youtube.com/embed/'
// const urlMovieSearch = 'https://api.themoviedb.org/3/movie/${movieId}'

const videos = 'https://api.themoviedb.org/3/movie/{436270}/videos?api_key=ca699f41df4cdcc6f6807864d5581587&language=en-US';
const urlSearchByKeyword = 'https://api.themoviedb.org/3/search/keyword?api_key=ca699f41df4cdcc6f6807864d5581587&query={black adam}&page=1';

const urlTrailer = 'https://api.themoviedb.org/3/movie/';



let testVideoBlackAdam = {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Official Trailer",
    "key": "JaV7mmc9HGw",
    "site": "YouTube",
    "size": 1080,
    "type": "Trailer",
    "official": true,
    "published_at": "2022-06-08T13:00:37.000Z",
    "id": "62a09e8065e0a2163e6cc526"
}

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    movieSearch: `?api_key=${API_KEY}&language=en-US`,
    videoSearch: `/videos?api_key=${API_KEY}&language=en-US`
};

export {
    baseUrl,
    imageUrl,
    urlTrailer,
    requests,
    urlMovieSearch,
    urlYouTube
}