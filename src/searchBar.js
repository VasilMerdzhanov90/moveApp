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

let exampleObject = {
    "adult": false,
    "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "genre_ids": [
        28,
        14,
        878
    ],
    "id": 436270,
    "original_language": "en",
    "original_title": "Black Adam",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "popularity": 3936.982,
    "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
    "release_date": "2022-10-19",
    "title": "Black Adam",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 876
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
    console.log(resultTab)
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
