function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Capitalize first letter of player selection and make rest lowercase
  playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

  let validSelections = ["Rock", "Paper", "Scissors"];
  if (!validSelections.includes(playerSelection)) {
    console.warn(`"${playerSelection}" is not a valid selection. Replay round.`);
    return;
  }

  if (playerSelection === computerSelection) {
    console.log(`Draw! Both parties selected ${playerSelection}. Replay round.`);
    return 0;
  } else if (
    playerSelection === "Rock" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock"
  ) {
    console.log(`You lose the round! ${computerSelection} beats ${playerSelection}.`);
    return -1;
  } else {
    console.log(`You win the round! ${playerSelection} beats ${computerSelection}.`);
    return 1;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  gameLoop:
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    let outcome = playRound(
      prompt("Enter Rock, Paper, or Scissors:", "Rock"),
      computerPlay()
    );

    switch (outcome) {
      case undefined:
      case 0:
        i--;
        continue gameLoop;
      case 1:
        playerScore++;
        break;
      case -1:
        computerScore++;
        break;
    }

    if (playerScore >= 3 || computerScore >= 3) break gameLoop;
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! ${playerScore} to ${computerScore}.`);
  } else {
    console.log(`You lose the game! ${playerScore} to ${computerScore}.`);
  }
}