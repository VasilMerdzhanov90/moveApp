import { baseUrl, requests, urlMovieSearch, imageUrl } from "./requests.js";

const mainContainer = document.getElementById('content-loader');
mainContainer.addEventListener('click', movieFinder);

const currentMovie = document.getElementById('current-movie');


export async function movieFinder(e) {
    const target = e ? e.target : "";
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
    release: document.getElementById('release'),
    runtime: document.getElementById('runtime'),
    languages: document.getElementById('languages'),
    rating: document.getElementById('rating'),
    movieBudget: document.getElementById('budged'),
    company: document.getElementById('company'),
    overview: document.getElementById('overview')
};
export function displayInfo(data) {
    infoSection.title.textContent = data.title;
    infoSection.originalTitle.textContent = `Original title: ${data.original_title}`;
    infoSection.image.src = `${imageUrl}${data.poster_path}`;
    infoSection.release.textContent = data.release_data;
    infoSection.runtime.textContent = `${data.runtime} minutes`;
    let languages = data.spoken_languages.map(x => x.name)
    infoSection.languages.textContent = languages.join(', ');
    infoSection.rating.textContent = data.vote_average;
    infoSection.movieBudget.textContent = `${data.budget}$`;
    infoSection.overview.textContent = data.overview;
    let companies = data.production_companies.map(x => x['name']);
    infoSection.company.textContent = companies.join(' / ');
}



/**backdrop_path: "/p68WrxXPgmhjuaYetTiVKLUb65s.jpg"
​
first_air_date: "2018-09-24"
​
genre_ids: Array(3) [ 18, 9648, 10765 ]
​
id: 79696
​
name: "Manifest"
​
origin_country: Array [ "US" ]
​
original_language: "en"
​
original_name: "Manifest"
​
overview: "After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. As their new realities become clear, a deeper mystery unfolds and some of the returned passengers soon realize they may be meant for something greater than they ever thought possible."
​
popularity: 608.866
​
poster_path: "/1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg"
​
vote_average: 7.7
​
vote_count: 953
​
<prototype>: Object { … } */