import { baseUrl, imageUrl, requests } from "./requests.js";


const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', fetchApi)


async function fetchApi() {
    const response = await fetch(`${baseUrl}${requests.actionMovies}`);
    const data = await response.json()
    textarea.value = JSON.stringify(data, null, 2);
    console.log(data)
}