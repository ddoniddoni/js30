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
      const movieName = document.querySelector(".movie__name");
      const movieOpen = document.querySelector(".movie__open");
      movieName.textContent = json.movieListResult.movieList[0].movieNm;
      movieOpen.textContent = json.movieListResult.movieList[0].openDt;
    });
}

function init() {
  getMovie();
}

init();
