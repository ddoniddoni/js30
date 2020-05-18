const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading})deg`;
  },
  (err) => {
    alert("Hey~ You Gotta Allow That to Happen!!!");
  }
);
