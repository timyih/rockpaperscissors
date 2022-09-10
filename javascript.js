function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();

    if (playerLower === "rock") {
        if (computerLower === "rock") {
            return "Tie! You both chose Rock!";
        } else if (computerLower === "paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    } else if (playerLower === "paper") {
        if (computerLower === "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerLower === "paper") {
            return "Tie! Your both chose Paper!";
        } else {
            return "You lose! Scissors beats Paper!";
        }
    } else {
        if (computerLower === "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerLower === "paper") {
            return "You win! Scissors beats Paper!";
        } else {
            return "Tie! You both chose Scissors!";
        }
    }
}