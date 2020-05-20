// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const image = document.querySelector(".image");
const answer = document.querySelector(".answer");

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "ko-KR";

let p = document.createElement("p");
answer.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  p.textContent = poopScript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    answer.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();
