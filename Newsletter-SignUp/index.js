const container = document.querySelector(".container");
const subscriptionForm = document.getElementById("form");
const greetingsCard = document.getElementById("container-success");
const buttonDismiss = document.getElementById("dismiss");
const emailSpan = document.querySelector('.valueGmail')

function showSuccessForm() {
  container.style.display = "none";
  greetingsCard.style.display = "flex";

  const emailValue = document.getElementById('email').value;
  emailSpan.textContent = emailValue;
}

subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccessForm();
});



function showSubscriptionForm() {
  container.style.display = "flex";
  greetingsCard.style.display = "none";
}

buttonDismiss.addEventListener("click", (e) => {
  showSubscriptionForm();
});
