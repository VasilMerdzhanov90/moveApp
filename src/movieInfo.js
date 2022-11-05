import { baseUrl, requests, urlMovieSearch } from "./requests.js";

const mainContainer = document.getElementById('content-loader');
mainContainer.addEventListener('click', movieFinder);

export async function movieFinder(e) {
    const target = e ? e.target : "";
    if (target.tagName == 'IMG') {
        const movieId = target.dataset.id
        // console.log(urlMovieSearch + movieId + requests.movieSearch)
        try {
            const response = await fetch(`${urlMovieSearch}${movieId}${requests.movieSearch}`);
            if (response.ok == false) {
                const error = await response.json()
                throw new Error(error.message)
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            alert(error.message);
        }
    }
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