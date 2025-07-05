"use strict";
const random = () => Math.floor(Math.random() * 20 + 1);
let guessNumber = random();

let game = true;
let highScore = 0;
let currentScore = 20;
function resetGame() {
  document.querySelector("h1").textContent = "Guess My Number!(again)";
  document.querySelector(".message").textContent = "Start guessing...";
  guessNumber = random();
  document.querySelector(".number").textContent = "?";
  currentScore = 20;
  document.querySelector(".score").textContent = currentScore;
  document.querySelector("body").style.backgroundColor = "#383333";
  game = true;
}

function changeScores() {
  if (currentScore > 0) {
    currentScore--;
    document.querySelector(".score").textContent = currentScore;
  } else {
    game = false;
    document.querySelector(".message").textContent = "Try a new game🎲";
  }
}

function check() {
  let currentNumber = Number(document.querySelector("input.guess").value);

  if (game) {
    if (currentNumber === guessNumber) {
      document.querySelector(".number").textContent = guessNumber;
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector("h1").textContent = "You're won👑";
      document.querySelector(".message").textContent = "Let's play again!";

      if (currentScore > highScore) {
        highScore = currentScore;
        document.querySelector(".highscore").textContent = highScore;
      }

      game = false;
    } else if (currentNumber < guessNumber) {
      document.querySelector(".message").textContent =
        "Too low, try higher one☝️";
      changeScores();
    } else if (currentNumber > guessNumber) {
      document.querySelector(".message").textContent =
        "Too high, try lower one👇";
      changeScores();
    }
  } else {
    for (let i = 1; i < 3; i++) {
      setTimeout(() => {
        document.querySelector(".again").style.backgroundColor = "#03df28";
      }, i * 500);

      setTimeout(() => {
        document.querySelector(".again").style.backgroundColor = "#eee";
      }, i * 500 + 250);
    }
  }
}
document.querySelector(".check").addEventListener("click", () => check());

document.querySelector(".again").addEventListener("click", () => resetGame());
