let meniuAdmin = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let searched = { ingrediente: "" };
let index = window.location.search.substring(4);

async function del() {
  if (confirm(`Esti sigur ca vrei sa stergi linkul?`)) {
    let urlIdx = url + index + ".json";

    let response = await fetch(urlIdx, {
      method: "DELETE",
    });
    window.location = "admin.html";
  }
}

function cancel() {
  window.location = "admin.html";
}
