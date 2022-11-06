import { listOfMoviesGenerator } from "./mainContentLoader.js";
import { movieFinder } from "./movieInfo.js";

const searchForm = document.getElementById('search');
searchForm.addEventListener('submit', searchMovie);

async function searchMovie(e) {
    e.preventDefault()

    const formData = new FormData(e.target);
    const value = formData.get('search');

    const urlSearchByMovie = `https://api.themoviedb.org/3/search/movie?api_key=ca699f41df4cdcc6f6807864d5581587&language=en-US&query=${value}&page=1&include_adult=false`;

    try {
        if (value.length < 3) {
            alert('Field must have at least 3 letters!');
            return;
        }
        const response = await fetch(urlSearchByMovie);

        if (response.ok == false) {
            const error = await response.json();
            alert(error.message)
            return;
        }
        const data = await response.json();
        generator(data.results);
        e.target.reset()
    } catch (error) {
        alert(error.message);
    }

}



function generator(data) {
    const resultTab = document.querySelector('div[id="toggle"]');
    resultTab.hidden = false;
    searchForm.hidden = true;
    const foundMovies = document.createElement('div');
    foundMovies.className = 'found-movies';
    foundMovies.replaceChildren(...data.map(listOfMoviesGenerator));
    foundMovies.addEventListener('click', movieFinder)
    document.querySelector('div').appendChild(foundMovies);
    resultTab.addEventListener('click', closeSearch);

    function closeSearch(e) {
        if (e.target.textContent == 'Close') {
            foundMovies.remove()
            searchForm.hidden = false;
            resultTab.hidden = true;
            console.log(e.target)
        }
    }
}
