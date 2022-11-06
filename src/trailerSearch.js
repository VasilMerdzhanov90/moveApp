import { requests, urlTrailer, urlYouTube } from "./requests.js";

const trailerTag = document.getElementById('trailer');
const frameVideo = document.getElementById('video');

trailerTag.addEventListener('click', trailerSearch);

export async function trailerSearch() {
    const movieId = trailerTag.dataset.id;

    try {
        const response = await fetch(urlTrailer + movieId + requests.videoSearch);
        const data = await response.json();
        const result = data.results.filter(x => x.type == 'Trailer')[0];
        const videoUrl = `${urlYouTube}${result.key}`;
        videoHandler(videoUrl);
    } catch (error) {

    }
}



function videoHandler(videoUrl) {
    const closeBtn = document.getElementById('close');
    frameVideo.src = videoUrl;
    document.querySelector('div[class="video-container"]').hidden = false;

    closeBtn.addEventListener('click', () => {
    document.querySelector('div[class="video-container"]').hidden = true;
    frameVideo.src = '';
    })

}
