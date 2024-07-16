const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerMoveOutput = document.getElementById("computer-move");
const userMoveOutput = document.getElementById("user-move");
const computerMoveOutputImg = computerMoveOutput.querySelector("img");
const userMoveOutputImg = userMoveOutput.querySelector("img");
const inputScreen = document.querySelector(".input-screen");
const outputScreen = document.querySelector(".output-screen");
const resultStringOutput = document.getElementById("result-string");
const scoreOutput = document.getElementById("score");
const rematchBtn = document.getElementById("rematch");

let score = 0;
let resultString;

function handleClick(userMove) {
  const computerMove = getComputerMove();
  calculateScore(userMove, computerMove);
  setMovesUI(computerMove, userMove);
}

function getComputerMove() {
  const random = Math.floor(Math.random() * 3);
  return random;
}

function setMovesUI(computerMove, userMove) {
  if (userMove == 0) {
    userMoveOutputImg.src = "./Images/icon-rock.svg";
    userMoveOutput.style.borderColor = "hsl(349, 71%, 52%)";
  } else if (userMove == 1) {
    userMoveOutputImg.src = "./Images/icon-paper.svg";
    userMoveOutput.style.borderColor = "hsl(230, 89%, 62%)";
  } else {
    userMoveOutputImg.src = "./Images/icon-scissors.svg";
    userMoveOutput.style.borderColor = "hsl(39, 89%, 49%)";
  }

  outputScreen.classList.remove("hide");
  inputScreen.classList.add("hide");

  setTimeout(() => {
    if (computerMove == 0) {
      computerMoveOutputImg.src = "./Images/icon-rock.svg";
      computerMoveOutput.style.borderColor = "hsl(349, 71%, 52%)";
    } else if (computerMove == 1) {
      computerMoveOutputImg.src = "./Images/icon-paper.svg";
      computerMoveOutput.style.borderColor = "hsl(230, 89%, 62%)";
    } else {
      computerMoveOutputImg.src = "./Images/icon-scissors.svg";
      computerMoveOutput.style.borderColor = "hsl(39, 89%, 49%)";
    }

    computerMoveOutput.classList.remove("animate");
    resultStringOutput.innerText = resultString;
    scoreOutput.innerText = score;
  }, 3000);
}
function calculateScore(userMove, computerMove) {
  if (userMove == computerMove) {
    resultString = "Tie";
  } else {
    if (userMove == 0 && computerMove == 1) {
      resultString = "Computer Won!";
      score--;
    } else if (userMove == 0 && computerMove == 2) {
      resultString = "You Won!";
      score++;
    } else if (userMove == 1 && computerMove == 2) {
      resultString = "Computer Won!";
      score--;
    } else if (userMove == 1 && computerMove == 0) {
      resultString = "You Won!";
      score++;
    } else if (userMove == 2 && computerMove == 0) {
      resultString = "Computer Won!";
      score--;
    } else if (userMove == 2 && computerMove == 1) {
      resultString = "You Won!";
      score++;
    }
  }
}
function handleRematch() {
  outputScreen.classList.add("hide");
  inputScreen.classList.remove("hide");
  computerMoveOutput.classList.add("animate");
  resultStringOutput.innerText = "";
  computerMoveOutput.style.borderColor = "";
  computerMoveOutputImg.src = "";
}

// Event Listeners
rock.addEventListener("click", () => handleClick(0));
paper.addEventListener("click", () => handleClick(1));
scissors.addEventListener("click", () => handleClick(2));
rematchBtn.addEventListener("click", handleRematch);
