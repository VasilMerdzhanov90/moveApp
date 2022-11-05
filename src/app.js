import { loadListOfMovies } from "./mainContentLoader.js";
import { movieFinder } from "./movieInfo.js";

loadListOfMovies()
movieFinder()

document.addEventListener('click', closeTab)

function closeTab(e) {
    const target = e ? e.target : "";
    console.log(target)
    if (target.id == 'close') {
        e.target.parentElement.remove()
    }
}