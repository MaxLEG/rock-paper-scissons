let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("results");
const scoreDisplay = document.getElementById("score");
const buttons = document.querySelectorAll(".container button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lost!";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDisplay.textContent = `You have chosen: ${playerChoice}. The computer has chosen: ${computerChoice}. ${result}`;
    scoreDisplay.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;
  });
});
