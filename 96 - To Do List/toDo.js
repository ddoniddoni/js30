const plusBtn = document.querySelector(".list__plus-btn");

function toDoPlus() {
  window.open("plus.html", "", "width=400, height=400, left=600 top=200");
}

plusBtn.addEventListener("click", toDoPlus);
