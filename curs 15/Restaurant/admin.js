let meniuAdmin = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let searched = { ingrediente: "" };

async function getData() {
  const response = await fetch(url + ".json");
  meniuAdmin = await response.json();
  draw();
}

function search() {
  let input = document.querySelector("[name='filtrare']");
  let searchVal = input.value;
  searched.ingrediente = searchVal.toLowerCase();
  draw();
}

function draw() {
  let table = document.querySelector("#container1");
  let str = "";

  for (let [i, article] of Object.entries(meniuAdmin)) {
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
    <div>
    <a href="edit.html?id=${i}">
      <input type="button" value="MODIFY" class="modify" />
    </a>
    <a href="delete.html?id=${i}">
      <input type="button" value="DELETE" class="delete" />
    </a>
    </div>`;
  }
  table.innerHTML = str;
}
