import { baseUrl, imageUrl, requests } from "./requests.js";


// const netflixContent = document.querySelector('[data="netflix"]')
const topContent = document.querySelector('[data="topRated"]')
const trendingContent = document.querySelector('[data="trending"]')
const actionContent = document.querySelector('[data="action"]')
const comedyContent = document.querySelector('[data="comedy"]')
const horrorContent = document.querySelector('[data="horror"]')
const romanceContent = document.querySelector('[data="romance"]')
const documentaryContent = document.querySelector('[data="documentary"]')

export async function loadListOfMovies() {

    const [netflixOriginal, topRated, trending, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaryMovies] = await Promise.all([
        fetch(baseUrl + requests.netflixOriginal),
        fetch(baseUrl + requests.topRated),
        fetch(baseUrl + requests.trending),
        fetch(baseUrl + requests.actionMovies),
        fetch(baseUrl + requests.comedyMovies),
        fetch(baseUrl + requests.horrorMovies),
        fetch(baseUrl + requests.romanceMovies),
        fetch(baseUrl + requests.documentaryMovies),
    ]);
    const [netflixOriginalData, topRatedData, trendingData, actionMoviesData, comedyMoviesData, horrorMoviesData, romanceMoviesData, documentaryMoviesData] = await Promise.all([
        netflixOriginal.json(),
        topRated.json(),
        trending.json(),
        actionMovies.json(),
        comedyMovies.json(),
        horrorMovies.json(),
        romanceMovies.json(),
        documentaryMovies.json(),
    ]);
    // netflixContent.replaceChildren(...netflixOriginalData.results.map(listOfMoviesGenerator))
    topContent.replaceChildren(...topRatedData.results.map(listOfMoviesGenerator))
    trendingContent.replaceChildren(...trendingData.results.map(listOfMoviesGenerator))
    actionContent.replaceChildren(...actionMoviesData.results.map(listOfMoviesGenerator))
    comedyContent.replaceChildren(...comedyMoviesData.results.map(listOfMoviesGenerator))
    horrorContent.replaceChildren(...horrorMoviesData.results.map(listOfMoviesGenerator))
    romanceContent.replaceChildren(...romanceMoviesData.results.map(listOfMoviesGenerator))
    documentaryContent.replaceChildren(...documentaryMoviesData.results.map(listOfMoviesGenerator))
}



function listOfMoviesGenerator(movies) {
    const posterPath = movies['poster_path']
    const div = document.createElement('div');
    div.className = 'movie';
    const poster = document.createElement('img');
    poster.id = 'poster';
    poster.src = `${imageUrl}${posterPath}`;
    poster.setAttribute('data-id', movies['id'])
    const title = document.createElement('h3');
    title.className = 'movieTitle';
    title.textContent = movies['title'] || movies['original_name'];
    // const moreInfoBtn = document.createElement('button');
    // moreInfoBtn.textContent = 'Show more...'

    div.appendChild(poster)
    div.appendChild(title)
    // div.appendChild(moreInfoBtn)
    return div;

}



