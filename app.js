const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

const resultText = document.getElementById("start-text");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const TIE = 0;
const WIN = 1;
const LOST = 2;
let isPlaying = false;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

rockButton.addEventListener("click", () => {
  play(ROCK);
});

paperButton.addEventListener("click", () => {
  play(PAPER);
});

scissorsButton.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  if (isPlaying) return;
  isPlaying = true;

  userImg.src = "images/" + userOption + ".svg";

  resultText.innerHTML = `<b>...<b/>`;

  const interval = setInterval(function () {
    const machineOption = calcMachineOption();
    machineImg.src = "images/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {

    clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = gameResult(userOption, machineOption);
    machineImg.src = "images/" + machineOption + ".svg";

    switch (result) {
      case WIN:
        resultText.innerHTML = "<b>You win!</b>";
        break;
      case LOST:
        resultText.innerHTML = "<b>You lost!</b>";
        break;
      case TIE:
        resultText.innerHTML = "<b>Is a tied! </b>";
        break;
    } isPlaying = false;
  }, 1500);
}

// Funcion para definir la option de la maquina
function calcMachineOption() {
  const machineOption = Math.floor(Math.random() * 3);

  switch (machineOption) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}


// Funcion para calcular resultado del juego
function gameResult(userOpt, machineOpt) {
  if (userOpt === machineOpt) {
    return TIE;

  } else if (userOpt === ROCK) {

    if (machineOpt === PAPER) return LOST;
    if (machineOpt === SCISSORS) return WIN;

  } else if (userOpt === PAPER) {

    if (machineOpt === ROCK) return WIN;
    if (machineOpt === SCISSORS) return LOST;

  } else if (userOpt === SCISSORS) {
    if (machineOpt === ROCK) return LOST;
    if (machineOpt === PAPER) return WIN;
  }
}
