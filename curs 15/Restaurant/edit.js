let meniuAdmin = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let index = window.location.search.substring(4);

async function adauga(event) {
  event.preventDefault();
  let nume = document.querySelector("[name='name']").value;
  let imagine = document.querySelector("[name='url']").value;
  let ingrediente = document.querySelector("[name='ingredients']").value;

  let urlIdx = url + index;
  let response = await fetch(urlIdx + "/" + ".json", {
    method: "PUT",
    body: JSON.stringify({
      nume: nume,
      imagine: imagine,
      ingrediente: ingrediente,
    }),
  });
  window.location = "admin.html";
}

function cancel() {
  window.location = "admin.html";
}

async function edit() {
  let urlIdx = url + index;
  let response = await fetch(urlIdx + "/" + ".json");
  let meniuAdmin = await response.json();
  document.querySelector("[name='name']").value = meniuAdmin.nume;
  document.querySelector("[name='url']").value = meniuAdmin.imagine;
  document.querySelector("[name='ingredients']").value = meniuAdmin.ingrediente;
}
