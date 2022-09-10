function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();

    if (playerLower === "rock") {
        if (computerLower === "rock") {
            console.log("Tie! You both chose Rock!");
            return 2;
        } else if (computerLower === "paper") {
            console.log("You lose! Paper beats Rock!")
            return 0;
        } else {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerLower === "paper") {
        if (computerLower === "rock") {
            console.log("You win! Paper beats Rock!");
            return 1;
        } else if (computerLower === "paper") {
            console.log("Tie! Your both chose Paper!");
            return 2;
        } else {
            console.log("You lose! Scissors beats Paper!");
            return 0;
        }
    } else {
        if (computerLower === "rock") {
            console.log("You lose! Rock beats Scissors!");
            return 0;
        } else if (computerLower === "paper") {
            console.log("You win! Scissors beats Paper!");
            return 1;
        } else {
            console.log("Tie! You both chose Scissors!");
            return 2;
        }
    }
}

const playerSelection = "ROck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));