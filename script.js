//TMDB

const API_KEY = 'api_key=3754416f7cb9e5010ce62384e4bf33c3';
const BASE_URL ='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML ='';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
    })
}

function getColor(vote) {
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}