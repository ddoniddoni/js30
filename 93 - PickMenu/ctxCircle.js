import "./styles.css";

const roullete = document.querySelector(".roullete");
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", onClickTrigger);

function onClickTrigger(e) {
  roullete.classList.add("loop");
}
