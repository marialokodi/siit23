let meniu = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let searched = { ingrediente: "" };

function search() {
  let input = document.querySelector("[name='filtrare']");
  let searchVal = input.value;
  searched.ingrediente = searchVal.toLowerCase();
  draw();
}

function draw() {
  let table = document.querySelector("#container1");
  let str = "";

  for (let [i, article] of Object.entries(meniu)) {
    if (article === null) {
      continue;
    }

    let poza;
    if (article.imagine === undefined) {
      poza =
        "https://gfsstore.com/wp-content/themes/gfsstore.com/images/no_image_available.png";
    } else {
      poza = article.imagine;
    }

    if (!article.ingrediente.toLowerCase().includes(searched.ingrediente)) {
      continue;
    }
    str += `<img
    src="${poza}"
  />
  <div class="foodDescription">
    <h4 class="nume">${article.nume}</h1>
    <p class="ingrediente">
    ${article.ingrediente}
    </p>
  </div>
  <a href="details.html?id=${i}">
    <input type="button" value="DETALII" class="detalii" />
  </a>`;
  }
  table.innerHTML = str;
}

async function getData() {
  document.querySelector("#loading").classList.remove("hidden");

  const response = await fetch(url + ".json");
  meniu = await response.json();

  document.querySelector("#loading").classList.add("hidden");

  draw();
}
