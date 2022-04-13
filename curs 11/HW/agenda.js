let state = {
  list: [],
  idxEdit: null,
};

function del(idx) {
  if (
    confirm(`Esti sigur ca vrei sa stergi linkul: ${state.list[idx].title}?`)
  ) {
    state.list.splice(idx, 1);
    draw();
  }
}

function adauga(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let telefon = document.querySelector("#telefon").value;
  if (state.idxEdit === null) {
    state.list.push({
      name: name,
      telefon: telefon,
    });
  } else {
    state.list[state.idxEdit] = {
      name: name,
      telefon: telefon,
    };
    state.idxEdit = null;
  }
  document.querySelector("form").reset();
  draw();
}

function edit(idx) {
  let elem = state.list[idx];
  document.querySelector("#name").value = elem.name;
  document.querySelector("#telefon").value = elem.telefon;
  state.idxEdit = idx;
}

function draw() {
  let table = document.querySelector("table");
  let tableBody = document.querySelector("tbody");
  let row = "";
  for (let i = 0; i < state.list.length; i++) {
    let elem = state.list[i];
    row += `<tr>
                <td>${elem.name}</td>
                <td>${elem.telefon}</td>
                <td>
                    <button onclick="del(${i})">Delete</button>
                    </td>
                    <td>
                    <button onclick="edit(${i})">Edit</button>
                    </td>

            </tr>`;
  }
  table.classList.remove("hidden");
  tableBody.innerHTML = row;
}
