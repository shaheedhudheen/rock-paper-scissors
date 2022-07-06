//making rock  paper scissors selection of computer 
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

let computerSelection = computerPlay();
let playerSelection = prompt("Choose Rock Paper or Scissors").toUpperCase();
console.log(computerSelection);
console.log(playerSelection);

//playing a round of game
function playRound() {
  let result;
  if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    result = "You Lose! Rock beats Scissors";
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    result =  "You Lose! Paper beats Rock";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    result = "You Lose! Scissors beats Paper";
  } else {
    result = "You Wins";
  }
  return result;
}

function game() {
  let result;
  for(let i = 0; i < 5; i++){
    result = playRound();
  }
  alert(result);
}



