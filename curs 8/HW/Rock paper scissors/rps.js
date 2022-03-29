options = ["rock", "paper", "scissors"];
let computerRandom = options[Math.floor(Math.random() * options.length)];
let userRandom = options[Math.floor(Math.random() * options.length)];

function play(computer, user) {
  let winner = "";
  let userWins = false;
  if (computer === user) {
    console.log("Tie");
  } else if ((computer = "rock")) {
    if (user === "paper") {
      userWins = true;
      winner = "user";
    } else if (user === "scissors") {
      userWins = false;
      winner = "computer";
    }
  } else if (computer === "paper") {
    if (user === "rock") {
      userWins = false;
      winner = "computer";
    } else if (user === "scissors") {
      userWins = true;
      winner = "user";
    }
  } else if (computer === "scissors") {
    if (user === "rock") {
      userWins = true;
      winner = "user";
    } else if (user === "scissors") {
      userWins = false;
      winner = "computer";
    }
  }
  console.log(`Computer chioce: "${computer}"`);
  console.log(`User chioce: "${user}"`);
  console.log(`${winner} wins`);
}
