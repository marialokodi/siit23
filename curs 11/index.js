let state = {
  list: [],
  search: {
    title: "",
    difficulty: "",
    tags: "",
  },
  idxEdit: null,
  sortColumn: null,
  sortDirection: 1, //1 e asc, -1 e desc

  difficulty: {
    "": "",
    0: "Entry Level",
    1: "Easy",
    2: "Medium",
    3: "Hard",
    4: "Hacker",
  },
  databaseUrl:
    "https://linkuri-siit-23-default-rtdb.europe-west1.firebasedatabase.app/",
};

/*function deleteAll() {
  let checked = document.querySelectorAll("input[type='checkbox']");
  for (let i = checked.length - 1; i >= 0; i--) {
    if (checked[i].checked) {
      state.list.splice(i, 1);
    }
  }
  draw();
}*/

async function deleteAll() {
  let checkboxes = document.querySelectorAll(
    "input[type=checkbox][name=deleteAll]:checked"
  );
  if (
    checkboxes.length === 0 ||
    !confirm(`Sigur vrei sa stergi ${checkboxes.length} linkuri?`)
  ) {
    return;
  }
  for (let i = checkboxes.length - 1; i >= 0; i--) {
    //state.list.splice(Number(checkboxes[i].getAttribute("idx")), i);
    let idx = checkboxes[i].getAttribute("idx");
    let url = state.databaseUrl + idx + "/" + ".json";
    let response = await fetch(url, {
      method: "DELETE",
    });
  }
  getData();
}

function search(input, column) {
  let searchVal = input.value;
  state.search[column] = searchVal.toLowerCase();
  draw();
}

/*function sortTable(column) {
  if (column === "title") { 
    state.list.sort(compareTitle);
  } else if (column === "difficulty") {
    state.list.sort(compareDifficulty);
  }
  draw();
}


function compareTitle(a, b) {
  if (a.title < b.title) {
    return 1;
  } else if (a.title > b.title) {
    return -1;
  } else {
    return 0;
  }
}*/
function sortTable(th, column) {
  let sortDirectionSpans = document.querySelectorAll(".sortDirection");
  for (let span of sortDirectionSpans) {
    span.innerText = "";
  }

  if (state.sortColumn === column) {
    state.sortDirection = -state.sortDirection;
  } else {
    state.sortDirection = 1;
  }
  state.sortColumn = column;

  /*if (state.sortDirection === 1) {
    th.querySelector(".sortDirection").innerHTML = "&darr;";
  } else {
    th.querySelector(".sortDirection").innerHTML = "&uarr;";
  }*/
  th.querySelector(".sortDirection").innerHTML =
    state.sortDirection === 1 ? "&darr;" : "&uarr;";

  draw();
}

/*function compare(a, b) {
  return a - b;
}*/

function draw() {
  let table = document.querySelector("#list tbody");
  let str = "";
  let column = state.sortColumn;
  let array = Object.entries(state.list);
  if (column !== null) {
    array.sort(function ([keyA, a], [keyB, b]) {
      let columnA = a[column];
      let columnB = b[column];
      if (columnA instanceof Array) {
        columnA = columnA.join();
      }
      if (columnB instanceof Array) {
        columnB = columnB.join();
      }
      columnA = columnA.toLowerCase();
      columnB = columnB.toLowerCase();

      if (a[column] < b[column]) {
        return -1 * state.sortDirection;
      } else if (a[column] > b[column]) {
        return 1 * state.sortDirection;
      } else {
        return 0;
      }
    });
  }

  for (let [i, elem] of Object.entries(state.list)) {
    //object distructuring
    //for (let i = 0; i < state.list.length; i++) {
    //  let elem = state.list[i];
    if (elem === null) {
      continue;
    }
    if (elem.tags === undefined) {
      elem.tags = [];
    }
    if (!elem.title.toLowerCase().includes(state.search.title)) {
      continue;
    }
    if (
      !elem.difficulty.toLowerCase().includes(state.search.difficulty) &&
      !state.difficulty[elem.difficulty]
        .toLowerCase()
        .includes(state.search.difficulty)
    ) {
      continue;
    }
    if (!elem.tags.join(", ").toLowerCase().includes(state.search.tags)) {
      continue;
    }
    str += `
            <tr>
                <td>
                <input type="checkbox" name="deleteAll" idx="${i}"/>
                <a href="${elem.url}" target="_blank">${elem.title}</a></td>
                <td>${state.difficulty[elem.difficulty]}</td>
                <td>${elem.tags.join(", ")}</td>
                <td>
                    <button onclick="del('${i}')">Delete</button>
                    <button onclick="edit('${i}')">Edit</button>
                </td>
            </tr>
        `;
  }
  table.innerHTML = str;
}

//din CRUD asta e DELETE
async function del(idx) {
  if (
    confirm(`Esti sigur ca vrei sa stergi linkul: ${state.list[idx].title}?`)
  ) {
    //state.list.splice(idx, 1);
    //https:// ...com/2/.json
    let url = state.databaseUrl + idx + "/" + ".json";
    let response = await fetch(url, {
      method: "DELETE",
    });
    await getData();
  }
}

function edit(idx) {
  showForm();
  let elem = state.list[idx];
  document.querySelector("[name='title']").value = elem.title;
  document.querySelector("[name='url']").value = elem.url;
  document.querySelector("[name='difficulty']").value = elem.difficulty;

  let tagsInputs = document.querySelectorAll("[name='tags']");
  for (let i = tagsInputs.length; i < elem.tags.length; i++) {
    addTag();
  }
  tagsInputs = document.querySelectorAll("[name='tags']");
  for (let i = 0; i < elem.tags.length; i++) {
    tagsInputs[i].value = elem.tags[i];
  }
  state.idxEdit = idx;
}

async function adauga(event) {
  event.preventDefault();
  let title = document.querySelector("[name='title']").value.trim();
  let url = document.querySelector("[name='url']").value.trim();
  let difficulty = document.querySelector("[name='difficulty']").value.trim();
  let tagInputs = document.querySelectorAll("[name='tags']");
  let tags = [];

  for (let input of tagInputs) {
    if (input.value.trim() !== "") {
      tags.push(input.value.trim());
    }
  }
  if (state.idxEdit === null) {
    //vreau sa adaug un element nou in lista
    /* state.list.push({
      title: title,
      url: url,
      difficulty: difficulty,
      tags: tags,
    });*/

    let response = await fetch(state.databaseUrl + ".json", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        url: url,
        difficulty: difficulty,
        tags: tags,
      }),
    });
  } else {
    //aici sunt in timpul editarii
    /* state.list[state.idxEdit] = {
      title: title,
      url: url,
      difficulty: difficulty,
      tags: tags,*/
    let response = await fetch(
      state.databaseUrl + state.idxEdit + "/" + ".json",
      {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          url: url,
          difficulty: difficulty,
          tags: tags,
        }),
      }
    );
    state.idxEdit = null;
  }

  showTable();
  document.querySelector("form").reset();
  await getData();
}

function addTag(event) {
  //pentru ca click pe buton dadea submit la formular;
  if (event !== undefined && event !== null) {
    event.preventDefault();
  }

  let button = document.querySelector("#addTagBtn");
  button.parentElement.insertAdjacentHTML(
    "beforeend",
    `<br/><input type="text" placeholder="Tag" name="tags" />`
  );
}

/*function showTable() {
  let formular = document.querySelector("#formular");
  let tabel = document.querySelector("#list");

formular.classList.toggle("hidden");
  tabel.classList.toggle("hidden");
}*/

function showTable() {
  let tabel = document.querySelector("#list").classList.remove("hidden");
  let formular = document.querySelector("#formular").classList.add("hidden");
}

function showForm() {
  document.querySelector("form").reset();
  //delet extra elements from form
  let tagInputs = document.querySelectorAll("[name='tags']");
  for (let i = 1; i < tagInputs.length; i++) {
    tagInputs[i].remove();
  }
  let brs = tagInputs[0].parentElement.querySelectorAll("br");
  for (let br of brs) {
    br.remove();
  }
  state.idxEdit = null;
  let formular = document.querySelector("#formular").classList.remove("hidden");
  let tabel = document.querySelector("#list").classList.add("hidden");
}

//din CRUD asta e READ
async function getData() {
  let url = state.databaseUrl + ".json";
  let response = await fetch(url);
  //let serverResponseText = await response.text();
  let list = await response.json();
  // console.log(serverResponseText);
  if (list === null) {
    state.list = {};
    showForm();
  } else {
    state.list = list;
    draw();
  }
}
