const dataJSON = "data.json";
const summary = document.getElementById("summary-information");

fetch(dataJSON)
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
      let div = document.createElement("div");
      div.classList.add(`information-${element.category}`);
      div.innerHTML = `
    <div class="information-general">
    <img src="${element.icon}" alt="${element.category}">
    <h1 class="information-title-${element.category}">${element.category}</h1>
    </div>
    <p><strong>${element.score}</strong> / 100</p>
      `;
      summary.appendChild(div);
    });
  })
  .catch((error) => {
    console.error(error);
  });
