const numHours = document.querySelector(".hours");
const numMinutes = document.querySelector(".minutes");
const numSeconds = document.querySelector(".seconds");

function getTime() {
  const now = new Date();
  numHours.innerHTML = now.getHours();
  numMinutes.innerHTML = now.getMinutes();
  numSeconds.innerHTML = now.getSeconds();
}

function init() {
  setInterval(getTime, 1000);
}

init();
