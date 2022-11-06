import { loadListOfMovies } from "./mainContentLoader.js";
import { movieFinder } from "./movieInfo.js";
import * as search from './searchBar.js'

loadListOfMovies()
movieFinder()

document.addEventListener('click', closeTab)

function closeTab(e) {
    const target = e ? e.target : "";
    if (target.id == 'current-poster') {
        return
    }
    if (target.id == 'close') {
        e.target.parentElement.remove()
    }
}