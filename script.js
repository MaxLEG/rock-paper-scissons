let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("results");
const scoreDisplay = document.getElementById("score");
const buttons = document.getElementById(".container button");

function getComputerChoise() {
  const choises = ["rock", "paper", "scissors"];
  const randomChoise = Math.floor(Math.random() * 3);
  return choises[randomChoise];
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
    const playerChoise = button.id;
    const computerChoise = getComputerChoise();
    const result = playRound(playerChoise, computerChoise);
    resultDisplay.textContent = `You have chosen: ${playerChoice}. The computer has chosen: ${computerChoise}. ${result}`;
    scoreDisplay.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;
  });
});
