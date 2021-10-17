function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function playRound() {
  const playerSelection = this.id;
  const computerSelection = computerPlay();
  let playerScore = +playerScoreSpan.textContent;
  let computerScore = +computerScoreSpan.textContent;

  if (playerSelection === computerSelection) {
    message.textContent = `Draw! Both parties selected ${playerSelection}. Replay round.`;
  } else if (
    playerSelection === "Rock" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock"
  ) {
    message.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}.`;
    computerScoreSpan.textContent =  ++computerScore;
  } else {
    message.textContent = `You win the round! ${playerSelection} beats ${computerSelection}.`;
    playerScoreSpan.textContent = ++playerScore;
  }

  if (playerScore >= 3 || +computerScore >= 3) endGame(playerScore, computerScore);
}

function startGame() {
  newGameButton.disabled = true;
  choices.forEach(choice => choice.disabled = false);

  playerScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  message.textContent = "Let the game begin!"
}

function endGame(playerScore, computerScore) {
  choices.forEach(choice => choice.disabled = true);

  if (playerScore > computerScore) {
    message.innerHTML += `<br>You win the game! ${playerScore} to ${computerScore}.`;
  } else {
    message.innerHTML += `<br>You lose the game! ${playerScore} to ${computerScore}.`;
  }

  newGameButton.disabled = false;
}

const newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click", startGame);

const choices = document.querySelectorAll(".choices button");
choices.forEach(choice => choice.addEventListener("click", playRound));

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const message = document.querySelector(".message");