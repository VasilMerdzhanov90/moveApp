const baseUrl = 'https://api.themoviedb.org/3';
const imageUrl = 'http://image.tmdb.org/t/p/w300';
const API_KEY = 'ca699f41df4cdcc6f6807864d5581587';
const urlMovieSearch = 'https://api.themoviedb.org/3/movie/'
// const urlMovieSearch = 'https://api.themoviedb.org/3/movie/${movieId}'

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    movieSearch: `?api_key=ca699f41df4cdcc6f6807864d5581587&language=en-US`
};

export {
    baseUrl,
    imageUrl,
    requests,
    urlMovieSearch
}