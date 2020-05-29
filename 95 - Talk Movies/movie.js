const container = document.querySelector(".container");
const MOVIE_DATA =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?";
const API_KEY = "953230af24093ce531d0c6aef4dec491";
const API = `${MOVIE_DATA}key=${API_KEY}&movieNm=내부자들`;

function getMovie() {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      for (let i = 0; i < json.movieListResult.movieList.length; i++) {
        const movieName = document.createElement("div");
        const movieOpen = document.createElement("div");
        movieName.classList = "movie__name";
        movieOpen.classList = "movie__open";
        const movieN = json.movieListResult.movieList[i].movieNm;
        const movieO = json.movieListResult.movieList[i].openDt;
        movieName.textContent = movieN;
        movieOpen.textContent = movieO;
        container.appendChild(movieName);
        container.appendChild(movieOpen);
        console.log(movieN);
      }
    });
}

function init() {
  getMovie();
}

init();
