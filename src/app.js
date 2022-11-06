import { loadListOfMovies } from "./mainContentLoader.js";
import { movieFinder } from "./movieInfo.js";
import * as search from './searchBar.js'
import { trailerSearch } from "./trailerSearch.js";

loadListOfMovies()
movieFinder()
document.getElementById('current-movie').addEventListener('click', closeTab)

function closeTab(e) {
    const target = e ? e.target : "";
    if (target.id == 'current-poster') {
        return
    }
    if (target.id == 'close') {
        e.target.parentElement.hidden = 'true';
    }

}

// document.addEventListener('click', closeTab)

// function closeTab(e) {
//     // console.log(e.target)
//     const target = e ? e.target : "";
//     if (target.id == 'current-poster') {
//         return
//     }
//     // console.log(e.target.parentElement.hidden)
//     if (target.id == 'close') {
//         // e.target.parentElement.remove()
//         e.target.parentElement.hidden = 'true'
//     }
// }