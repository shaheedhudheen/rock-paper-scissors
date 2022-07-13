let live = document.querySelector(".live");
  let pScore = document.querySelector(".playerScore");
  let cScore = document.querySelector(".computerScore");

let playerScore = 0;
let computerScore = 0;

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

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

let final = document.querySelector(".final");
//winner
function winner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    final.textContent = "Tie";
  } else if (playerScore > computerScore) {
    final.textContent = "Finally Player Won";
  } else {
    final.textContent = "Finally Computer Won";
  }
  resetGame();
}

function liveUpdate() {
  live.textContent = result;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

//Play a round of game
function playRound(playerSelection, computerSelection) {
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
  liveUpdate();
}

let buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    let computerSelection = computerPlay();
    let playerSelection = e.target.textContent.toUpperCase();

    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
      winner(playerScore, computerScore);
    }else{
      final.textContent = '';
    }
  });
});
