/*let numeVar = "Nourescu";
let Bogdan = {
  nume: numeVar,
  prenume: "Bogdan",
  varsta: 33,
  inaltime: 1.73,
  calificari: ["HTML", "CSS", "JS"],
  adresaDomiciliu: {
    strada: "...",
    oras: "Bucuresti",
    judet: "B",
  },
};*/

let state = {
  player: true, //x e true; 0 e fals
  game: [null, null, null, null, null, null, null, null, null],
  game2: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  finished: false,
  displayPlayer: {
    true: "X",
    false: "0",
  },
  playerImage: {
    true: "x.svg",
    false: "0.svg",
  },
};

function play(pos) {
  if (state.finished) {
    newGame();
    return;
  }
  if (state.game[pos] !== null) {
    return;
  }

  let boxes = document.querySelectorAll("#game > .box");
  let box = boxes[pos];
  state.game[pos] = state.player;

  box.innerHTML = `<img src='image/${state.playerImage[state.player]}'/>`;

  if (state.game[0] === state.game[1] && state.game[1] === state.game[2]) {
    showMessage(`Player ${state.displayPlayer[state.player]} has won`);
    state.finished = true;
    return;
  }

  state.player = !state.player;
  showMessage(`It's player ${state.displayPlayer[state.player]}'s turn`);
  let isDraw = true;
  for (let g of state.game) {
    if (g === null) {
      isDraw = false;
    }
  }
  state.finished = isDraw;
  if (isDraw) {
    showMessage(`It's a draw`);
  }
  /*for (let g of state.game) {
    if ( g === null) {
        return;
    }
}
 state.finished;*/
}

function showMessage(msg) {
  document.querySelector("#gameMessage").innerText = msg;
}

function newGame() {
  showMessage("Joaca un x si 0");
  let boxes = document.querySelectorAll("#game>.box");
  for (let box of boxes) {
    box.innerHTML = "";
  }

  //alternativa 2
  let images = document.querySelectorAll("#game>.box");
  for (let img of images) {
    img.remove();
  }

  //alt 3
}
