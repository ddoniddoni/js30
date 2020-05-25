const quizData = [
  {
    url:
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    answer: "사과",
  },
  {
    url:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    answer: "오렌지",
  },
  {
    url:
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    answer: "딸기",
  },
  {
    url:
      "https://images.unsplash.com/photo-1582332205846-bf7627cae190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    answer: "멜론",
  },
];

let i;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const image = document.querySelector(".image");
const answer = document.querySelector(".answer");

const recognition = new SpeechRecognition();
recognition.interimResults = false;
// interimResults : 중간 결과를 반환할지(true) 안할지(false)
let p = document.createElement("p");
answer.appendChild(p);

const ran = () => {
  i = Math.floor(Math.random() * 4);
  image.setAttribute("src", quizData[i].url);
};

function setSpeech(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    // p = document.createElement("p");
    // answer.appendChild(p);
    if (p.textContent === quizData[i].answer) {
      alert("맞았어!");
      ran();
    } else if (p.textContent !== quizData[i].answer) {
      alert("틀렸어!");
    }
  }
}

ran();
recognition.addEventListener("result", setSpeech);
recognition.addEventListener("end", recognition.start);
recognition.start();
