let state = {
  list: [
    /*  {
            itemDescription:
        }*/
  ],
  sortColumn: null,
};

function draw() {
  let table = document.querySelector("#list");
  let tableBody = document.querySelector("tbody");
  let row = "";
  for (let i = 0; i < state.list.length; i++) {
    let elem = state.list[i];
    row += `<tr class="changeToBought">
                  <td class="newItem">${elem.itemDescription}</td>
                  <td>
                      <button onclick="bought(${i})">Mark as bought</button>
                      </td>  
              </tr>`;
  }
  table.classList.remove("hidden");
  tableBody.innerHTML = row;
}

function add(event) {
  event.preventDefault();
  let item = document.querySelector("#item").value;
  state.list.push({
    itemDescription: item,
    idxBought: false,
  });
  document.querySelector("form").reset();
  draw();
}

function sortTableAsc(column) {
  state.list.sort(function (a, b) {
    if (a[column] < b[column]) {
      return -1;
    } else if (a[column] === b[column]) {
      return 0;
    } else {
      return 1;
    }
  });

  draw();
}
function sortTableDsc(column) {
  state.list.sort(function (a, b) {
    if (a[column] < b[column]) {
      return 1;
    } else if (a[column] === b[column]) {
      return 0;
    } else {
      return -1;
    }
  });

  draw();
}

function bought(idx) {
  let elem = state.list[idx];
  let elements = document.querySelectorAll(".newItem");
  if (elem.idxBought === false) {
    elements[idx].classList.add("bought");
    elem.idxBought = true;
  } else {
    elements[idx].classList.remove("bought");
    elem.idxBought = false;
  }
}

/*function bought(td, idx) {
  let changeToBought = document.querySelectorAll(".changeToBought");
  for (let td of changeToBought) {
    td.classList.add("bought");
  }
}
td.querySelector(".newItem").classList.add("bought");
if (state.idxBought === false) {
    newItem.classList.add("bought");
    state.idxBought = true;
  } else {
    newItem.classList.remove("bought");
    state.idxBought = false;
  }
}

/*function bought(idx) {
    let newItem = document.querySelector(".newItem");
    
    if (state.idxBought === false) {
      newItem.classList.add("bought");
      state.idxBought = true;
    } else {
      newItem.classList.remove("bought");
      state.idxBought = false;
    }
  }*/
