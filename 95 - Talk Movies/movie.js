const startBtn = document.querySelector(".start__button");
const container = document.querySelector(".container-movie");

let p;
const MOVIE_DATA =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?";
const API_KEY = "953230af24093ce531d0c6aef4dec491";

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;

function setSpeech(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p = transcript;

  if (e.results[0].isFinal) {
    // p = document.createElement("p");
    // answer.appendChild(p);
    getMovie();
  }
}

function getMovie() {
  const API = `${MOVIE_DATA}key=${API_KEY}&movieNm=${p}`;
  console.log(API);
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      for (let i = 0; i < json.movieListResult.movieList.length; i++) {
        let movieO = "";
        const wrapper = document.createElement("div");
        const movieName = document.createElement("div");
        const movieOpen = document.createElement("div");
        wrapper.classList = "movie-wrapper";
        movieName.classList = "movie__name";
        movieOpen.classList = "movie__open";
        const movieN = `영화 이름 : ${json.movieListResult.movieList[i].movieNm}`;

        if (json.movieListResult.movieList[i].openDt === "") {
          movieO = "개봉 날짜 : 정확한 개봉날짜가 없습니다.";
        } else {
          movieO = `개봉 날짜 : ${json.movieListResult.movieList[i].openDt.replace(
            /(\d{4})(\d{2})(\d{2})/g,
            "$1년 $2월 $3일"
          )}`;
        }

        movieName.textContent = movieN;
        movieOpen.textContent = movieO;
        container.appendChild(wrapper);
        wrapper.appendChild(movieName);
        wrapper.appendChild(movieOpen);
      }
    });
}

function startMovie() {
  recognition.start();
}

startBtn.addEventListener("click", startMovie);
recognition.addEventListener("result", setSpeech);
// recognition.addEventListener("end", recognition.start);
// recognition.start();
