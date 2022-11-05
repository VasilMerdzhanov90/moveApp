import { loadListOfMovies } from "./mainContentLoader.js";
import { baseUrl, imageUrl, requests } from "./requests.js";

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
loadListOfMovies()

// export async function loadListOfMovies() {

//     const [netflixOriginal, topRated, trending, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaryMovies] = await Promise.all([
//         fetch(baseUrl + requests.netflixOriginal),
//         fetch(baseUrl + requests.topRated),
//         fetch(baseUrl + requests.trending),
//         fetch(baseUrl + requests.actionMovies),
//         fetch(baseUrl + requests.comedyMovies),
//         fetch(baseUrl + requests.horrorMovies),
//         fetch(baseUrl + requests.romanceMovies),
//         fetch(baseUrl + requests.documentaryMovies),
//     ]);

//     const [netflixOriginalData, topRatedData, trendingData, actionMoviesData, comedyMoviesData, horrorMoviesData, romanceMoviesData, documentaryMoviesData] = await Promise.all([
//         netflixOriginal.json(),
//         topRated.json(),
//         trending.json(),
//         actionMovies.json(),
//         comedyMovies.json(),
//         horrorMovies.json(),
//         romanceMovies.json(),
//         documentaryMovies.json(),
//     ]);
//     const dataList = { netflixOriginalData, topRatedData, trendingData, actionMoviesData, comedyMoviesData, horrorMoviesData, romanceMoviesData, documentaryMoviesData };
//     console.log(dataList)

// }