// Obtencion de elemento con las imagenes de la opcion de cada jugador
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

// Obtencion del elemento para mostrar resultado
const resultText = document.getElementById("start-text");

// Obtencion de los botones
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Constantes con los resultados
const TIE = 0;
const WIN = 1;
const LOST = 2;
let isPlaying = false;

// Constantes con las opciones
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


// Agregar evento al hacer click a los botones
rockButton.addEventListener("click", () => {
  play(ROCK);
});

paperButton.addEventListener("click", () => {
  play(PAPER);
});

scissorsButton.addEventListener("click", () => {
  play(SCISSORS);
});

// Funcion
function play(userOption) {
  if (isPlaying) return;
  isPlaying = true;

  userImg.src = "images/" + userOption + ".svg";

  resultText.innerHTML = `<b>...<b/>`;

  // Intervalo para cambiar imagen cada 2 milesimas
  const interval = setInterval(function () {
    const machineOption = determineMachineOption();
    machineImg.src = "images/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {

    clearInterval(interval);

    const machineOption = determineMachineOption();

    // Guardar resultado en variable result
    const result = gameResult(userOption, machineOption);
    machineImg.src = "images/" + machineOption + ".svg";

    // Switch case con los resultados
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

// Funcion para calcular la opcion de la maquina
function determineMachineOption() {
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

// Funcion para calcular resultado
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
