let state = {
  player: true,
  game: [null, null, null, null, null, null, null, null, null],

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

function play(x) {
  if (state.finished) {
    newGame();
    return;
  }
  if (state.game[x] !== null) {
    return;
  }
  let boxes = document.querySelectorAll("#game > .box");
  let box = boxes[x];
  state.game[x] = state.player;

  box.innerHTML = `<img src='/curs 10/image/${
    state.playerImage[state.player]
  }'/>`;

  if (
    (state.game[0] === state.game[1] && state.game[1] === state.game[2]) ||
    (state.game[3] === state.game[4] && state.game[4] === state.game[5]) ||
    (state.game[6] === state.game[7] && state.game[7] === state.game[8]) ||
    (state.game[0] === state.game[3] && state.game[3] === state.game[6]) ||
    (state.game[1] === state.game[4] && state.game[4] === state.game[7]) ||
    (state.game[2] === state.game[5] && state.game[5] === state.game[8]) ||
    (state.game[0] === state.game[4] && state.game[4] === state.game[8]) ||
    (state.game[2] === state.game[4] && state.game[4] === state.game[6])
  ) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  /* if (state.game[3] === state.game[4] && state.game[4] === state.game[5]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[6] === state.game[7] && state.game[7] === state.game[8]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[0] === state.game[3] && state.game[3] === state.game[6]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[1] === state.game[4] && state.game[4] === state.game[7]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[2] === state.game[5] && state.game[5] === state.game[8]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[0] === state.game[4] && state.game[4] === state.game[8]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }
  if (state.game[2] === state.game[4] && state.game[4] === state.game[6]) {
    showMessage(`Player ${state.displayPlayer[state.player]} won`);
    state.finished = true;
    return;
  }*/

  state.player = !state.player;
  showMessage(`It's player ${state.displayPlayer[state.player]}'s turn`);
  let isDraw = true;
  for (let g of state.game) {
    if (g === null) {
      isDraw = true;
    }
  }
  state.finished = isDraw;
  if (isDraw) {
    showMessage("Draw");
  }
}
function showMessage(msg) {
  let message = document.querySelector("#gameMessage");
  message.innerHTML = msg;
}

function newGame() {
  showMessage("Joaca un x si 0");
  let boxes = document.querySelectorAll("#game > .box");
  for (let box of boxes) {
    box.innerHTML = "";
  }
  state.finished = false;
}
