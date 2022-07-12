let playerScore = 0;
let computerScore = 0;
let result = "";

//computer Selection
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerSelection;

  if (randomNumber === 1) {
    computerSelection = "ROCK";
  } else if (randomNumber === 2) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSORS";
  }
  return computerSelection;
}
//player Selection
// function playerPlay() {
//   const playerSelection = prompt("Choose Rock Paper or Scissors").toUpperCase();
//   return playerSelection;
// }

//winner
function winner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return "Tie";
  } else if (playerScore > computerScore) {
    return "Finally Player Won";
  } else {
    return "Finally Computer Won";
  }
}

let pScore = document.querySelector(".playerScore");
let cScore = document.querySelector(".computerScore");
let live = document.querySelector(".live");

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore++;
    result = "Computer Won";
  } else if (playerSelection === computerSelection) {
    result = "Tie";
  } else {
    playerScore++;
    result = "Player Won";
  }
  live.textContent = result;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = computerPlay();
//     const playerSelection = playerPlay();
//     playRound(playerSelection, computerSelection);
//   }
//   alert(winner(playerScore, computerScore))
// }
// const computerSelection = computerPlay();
// const playerSelection = playerPlay();

// game();

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerSelection = e.target.textContent.toUpperCase();
    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  });
});
