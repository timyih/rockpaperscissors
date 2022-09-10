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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let playerChoice;

    for (let i = 0; i < 5; i++){
        playerChoice = window.prompt("Type rock, paper, or scissors");
        if (playerChoice.toLowerCase() !== "rock" || playerChoice.toLowerCase() !== "paper" || playerChoice.toLowerCase() !== "scissors") {
            console.log("Really? Couldn't stick to the options provided? Now the whole game is screwed and you gotta restart.");
            return "Reload the page dummy.";
        }
        let outcome = playRound(playerChoice, getComputerChoice());
        if (outcome === 1) {
            playerScore++;
        } else if (outcome === 0) {
            computerScore++;
        } else {
            // Nothing happens
        }
    }

    if (playerScore > computerScore) {
        return "You won! The score was: " + playerScore + " to " + computerScore;
    } else {
        return "You lose! The score was: " + playerScore + " to " + computerScore;
    }
}

const playerSelection = "ROck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));