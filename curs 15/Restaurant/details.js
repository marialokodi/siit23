let meniu = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let index = window.location.search.substring(4);

if (index.length < 1) {
  window.location = "meniu.html";
}

async function getData() {
  const response = await fetch(url + index + ".json");
  meniu = await response.json();

  draw();
}

function draw() {
  document.querySelector("#nume").innerText = meniu.nume;

  let poza;
  if (meniu.imagine === undefined) {
    poza =
      "https://gfsstore.com/wp-content/themes/gfsstore.com/images/no_image_available.png";
  } else {
    poza = meniu.imagine;
  }
  document.querySelector("#poze").src = poza;
  document.querySelector("#ingrediente").innerHTML = meniu.ingrediente;
}
