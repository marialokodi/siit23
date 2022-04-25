let meniuAdmin = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";

async function adauga() {
  event.preventDefault();
  let nume = document.querySelector("[name='name']").value;
  let imagine = document.querySelector("[name='url']").value;
  let ingrediente = document.querySelector("[name='ingredients']").value;

  let response = await fetch(url + ".json", {
    method: "POST",
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
