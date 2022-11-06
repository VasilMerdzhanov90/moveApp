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

        // const result = data.results.filter(x => x.official == true);
        // const filteredResult = result.filter(x => x.type == 'Trailer')[0];
        // const videoUrl = `${urlYouTube}${filteredResult.key}`;

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

// {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Coco | All the Facts | Disney+ Deets",
//     "key": "rKCUPdZHyyc",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Featurette",
//     "official": true,
//     "published_at": "2021-11-01T20:00:11.000Z",
//     "id": "62c042a4af6e94125c84948d"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Coco (2017) Teaser",
//     "key": "k4vVAbIm3hA",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Teaser",
//     "official": false,
//     "published_at": "2019-05-05T03:07:22.000Z",
//     "id": "5cce60410e0a262d7bfe78b9"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Coco (2017) Australian Trailer",
//     "key": "_TLXORFumu0",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "official": false,
//     "published_at": "2019-05-05T02:57:42.000Z",
//     "id": "5cce5fb8c3a36836b7df9dd5"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Anthony Gonzalez, Gael García Bernal - Un Poco Loco",
//     "key": "yg8116aeD7E",
//     "published_at": "2017-12-21T18:00:06.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": false,
//     "id": "5a6510769251410b2102b70f"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Facts About Coco",
//     "key": "dPw0J6Kaj04",
//     "published_at": "2017-12-08T23:31:19.000Z",
//     "site": "YouTube",
//     "size": 480,
//     "type": "Featurette",
//     "official": true,
//     "id": "5a6510ce9251410b2a02c42c"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Music of Coco",
//     "key": "O7PUsrGUUh0",
//     "published_at": "2017-11-29T16:58:11.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Featurette",
//     "official": true,
//     "id": "5aefc4580e0a261d7a00bd2b"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Clean Up Your Act",
//     "key": "n3umjh6xYok",
//     "published_at": "2017-11-22T20:53:58.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5a6510910e0a2619fb02f132"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Battle of the Bands",
//     "key": "TO_CrQbRdbo",
//     "published_at": "2017-11-20T22:06:23.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5a6510050e0a261a0102e0f0"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "A Great, Great Rescue",
//     "key": "KbsOT6-LjSs",
//     "published_at": "2017-11-10T17:47:39.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5aefc4cb0e0a261d8f00c4fd"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Not Like the Rest",
//     "key": "di2bCDqa_Ro",
//     "published_at": "2017-11-09T20:32:07.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5a6510aa0e0a2619f802e519"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Anything to Declare?",
//     "key": "upT1iqrxNBw",
//     "published_at": "2017-11-07T23:24:08.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5aefc55c925141768800dda9"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Official Final Trailer",
//     "key": "Rvr68u6k5sI",
//     "published_at": "2017-11-06T17:00:02.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "official": true,
//     "id": "5a650fa29251410b1f02c5f9"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "The Land of the Dead",
//     "key": "yOvfedkA_JM",
//     "published_at": "2017-11-02T18:14:25.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5aefc52b925141765e00d242"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Mariachi Plaza",
//     "key": "bFqeYK96JXc",
//     "published_at": "2017-10-17T19:00:05.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Clip",
//     "official": true,
//     "id": "5aefc4f3c3a368140f0102f1"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Crafting Coco",
//     "key": "946WZKoMSlU",
//     "published_at": "2017-10-17T19:00:00.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Featurette",
//     "official": true,
//     "id": "5aefc3b40e0a261d8000d2d9"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Official US \"Find Your Voice\" Trailer",
//     "key": "bvomHFZO0mk",
//     "published_at": "2017-09-13T16:00:07.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "official": true,
//     "id": "5a313af40e0a264cca185ac7"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Official US Trailer",
//     "key": "xlnPHQ3TLX8",
//     "published_at": "2017-06-07T23:30:01.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "official": true,
//     "id": "5a313ad0c3a36814a8001415"
//   },
//   {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Official US Teaser Trailer",
//     "key": "zNCz4mQzfEI",
//     "published_at": "2017-03-15T13:00:17.000Z",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Teaser",
//     "official": true,
//     "id": "5a313ab2c3a3680b9d1774a9"
//   }