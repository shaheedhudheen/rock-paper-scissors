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
function playerPlay() {
  const playerSelection = prompt("Choose Rock Paper or Scissors").toUpperCase();
  return playerSelection;
}

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
  console.log(result);
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    playRound(playerSelection, computerSelection);
  }
  alert(winner(playerScore, computerScore))
}

// const computerSelection = computerPlay();
// const playerSelection = playerPlay();

game();
