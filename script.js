//TMDB

const API_KEY = 'api_key=3754416f7cb9e5010ce62384e4bf33c3';
const BASE_URL ='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data);
    })
}

function showMovies(data) {

    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="" alt="img">
        <div class="movie-info">
            <h3>Movie Title</h3>
            <span class="rate">9.8</span>
        </div>
        <div class="overview">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Distinctio magni dolorum at? Reiciendis eum, maiores numquam s
            it ut quos doloremque accusantium adipisci dolor exercitationem et
             laudantium commodi quibusdam non voluptatibus.
        </div>
        `
    })
}