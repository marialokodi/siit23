const displayPlayer = {
  true: "X",
  false: "0",
};
const playerImage = {
  true: "x.svg",
  false: "0.svg",
};

const dbUrl =
  "https://x0x0-138ce-default-rtdb.europe-west1.firebasedatabase.app/";

let iAmPlayer = null;

let state = {
  player: true, //x e true; 0 e fals
  game: [null, null, null, null, null, null, null, null, null],
  finished: false,
};
async function putDB(path, val) {
  let response = await fetch(dbUrl + "/" + path + ".json", {
    method: "PUT",
    body: JSON.stringify(val),
  });
  return await response.json();
}

function isLooseEquals(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  if (
    (val1 === null || val1 === undefined) &&
    (val2 === null || val2 === undefined)
  ) {
    return true;
  }
  return false;
}

async function getDB() {
  let response = await fetch(dbUrl + ".json");
  let dbState = await response.json();
  if (state.player !== dbState.player || state.finished !== dbState.finished) {
    state.player = dbState.player;
    state.finished = dbState.finished;
    document.querySelector("#messageGame").innerText = message;
    if (state.finished) {
    } else {
    }
    await showMessage(`It's player ${displayPlayer[state.player]}'s turn`);

    if (dbState.game !== undefined) {
      let boxes = document.querySelectorAll("#game > .box");

      for (let idx = 0; idx < 9; idx++) {
        if (!isLooseEquals(state.game[idx], dbState.game[idx])) {
          console.log("celalat player a mutat" + idx);
          state.game[idx] = dbState.game[idx];
          let box = boxes[idx];
          box.innerHTML = `<img src='image/${playerImage[state.game[idx]]}'/>`;
        }
      }
    } else {
      let boxes = document.querySelectorAll("#game>.box");
      for (let box of boxes) {
        box.innerHTML = "";
      }
      state = dbState;
      state.game = [null, null, null, null, null, null, null, null, null];
    }
  }
}

async function play(pos) {
  if (state.finished) {
    await newGame();
    return;
  }
  if (state.player !== iAmPlayer) {
    return;
  }
  if (state.game[pos] !== null) {
    return;
  }

  let boxes = document.querySelectorAll("#game > .box");
  let box = boxes[pos];

  await putDB("game/" + pos, state.player);
  state.game[pos] = state.player;

  box.innerHTML = `<img src='image/${playerImage[state.player]}'/>`;

  if (
    state.game[0] === state.game[1] &&
    state.game[1] === state.game[2] &&
    state.game[2] !== null
  ) {
    await showMessage(`Player ${displayPlayer[state.player]} has won`);
    await putDB("finished", true);
    state.finished = true;
    return;
  }

  await putDB("player", !state.player);
  state.player = !state.player;
  await showMessage(`It's player ${displayPlayer[state.player]}'s turn`);
  let isDraw = true;
  for (let g of state.game) {
    if (g === null) {
      isDraw = false;
    }
  }

  await putDB("finished", isDraw);
  state.finished = isDraw;
  if (isDraw) {
    await showMessage(`It's a draw`);
  }
  /*for (let g of state.game) {
    if ( g === null) {
        return;
    }
}
 state.finished;*/
}

async function showMessage(msg) {
  document.querySelector("#gameMessage").innerText = msg;
  await putDB("message", msg);
}

async function newGame() {
  await showMessage("Joaca un x si 0");
  let boxes = document.querySelectorAll("#game>.box");
  for (let box of boxes) {
    box.innerHTML = "";
  }

  //alternativa 2
  /*
  let images = document.querySelectorAll("#game>.box >img");
  for (let img of images) {
    img.remove();
  }
  */

  //
  state.player = true;
  state.game = [null, null, null, null, null, null, null, null, null];
  state.finished = false;
  await putDB("", {
    player: true,
    game: [null, null, null, null, null, null, null, null, null],
    finished: false,
  });
}

async function chosePlayer(player) {
  document.querySelector("#chosePlayer").classList.add("hidden");
  document.querySelector("#gameContent").classList.remove("hidden");
  iAmPlayer = player;
  if (player) {
    await newGame();
  }
  setInterval(getDB, 1000);
}
