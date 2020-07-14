const roullete = document.querySelector(".roullete");
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", onClickTrigger);

function onClickTrigger() {
  roullete.classList.add("loop");
}
