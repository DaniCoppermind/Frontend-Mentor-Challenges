const questionAction = document.querySelectorAll(".question");
const questionButton = document.querySelectorAll(".button");

questionButton.forEach((button) => {
  button.addEventListener("click", () => {
    toggleButtonIcon(button);
  });
});

questionAction.forEach((question) => {
  question.addEventListener("click", () => {
    let answerText = question.nextElementSibling;
    answerText.classList.toggle("hidden");
  });
});

function toggleButtonIcon(button) {
  const currentAlt = button.getAttribute("alt");
  const newAlt = currentAlt === "icon-plus" ? "icon-minus" : "icon-plus";

  button.setAttribute("src", `./assets/images/${newAlt}.svg`);
  button.setAttribute("alt", newAlt);
}
