import { requests, urlMovieSearch, imageUrl } from "./requests.js";

const mainContainer = document.getElementById('content-loader');
mainContainer.addEventListener('click', movieFinder);

const currentMovie = document.getElementById('current-movie');

export async function movieFinder(e) {
    const target = e ? e.target : "";
    const parent = e ? target.parentElement.id : '';
    if (parent == 'display-info') {
        return
    };

    if (target.tagName == 'IMG') {
        const movieId = target.dataset.id
        try {
            const response = await fetch(`${urlMovieSearch}${movieId}${requests.movieSearch}`);
            if (response.ok == false) {
                const error = await response.json()
                throw new Error(error.message)
            }
            const data = await response.json()
            displayInfo(data)
            currentMovie.hidden = false;
            e.target.parentElement.parentElement.previousElementSibling.appendChild(currentMovie)
        } catch (error) {
            alert(error.message);
        }
    }
}


const infoSection = {
    title: document.getElementById('current-title'),
    originalTitle: document.getElementById('original-title'),
    image: document.getElementById('current-poster'),
    // release: document.getElementById('release'),
    // runtime: document.getElementById('runtime'),
    // languages: document.getElementById('languages'),
    // rating: document.getElementById('rating'),
    // movieBudget: document.getElementById('budged'),
    // company: document.getElementById('company'),
    overview: document.getElementById('overview')
};
export function displayInfo(data) {
    infoSection.title.textContent = data.title;
    infoSection.originalTitle.textContent = `Original title: ${data.original_title}`;
    infoSection.image.src = `${imageUrl}${data.poster_path}`;
    // infoSection.image.setAttribute('data-id', data.id);
    if (infoSection.image.src == 'http://image.tmdb.org/t/p/w300null') {
        infoSection.image.src = 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'
    }

    // infoSection.release.textContent = data.release_data;
    // infoSection.runtime.textContent = `${data.runtime} minutes`;
    // let languages = data.spoken_languages.map(x => x.name)
    // infoSection.languages.textContent = languages.join(', ');
    // infoSection.rating.textContent = data.vote_average;
    // infoSection.movieBudget.textContent = `${data.budget}$`;
    infoSection.overview.textContent = data.overview;
    // let companies = data.production_companies.map(x => x['name']);
    // infoSection.company.textContent = companies.join(' / ');
    document.getElementById('trailer').setAttribute('data-id', data.id);
}
