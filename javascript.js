let playerScore = 0;
let computerScore = 0;
const playerScoreCounter = document.querySelector('p.playerScoreCounter');
const computerScoreCounter = document.querySelector('p.computerScoreCounter');
const announcement = document.querySelector('h2');

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();

    if (playerLower === "rock") {
        if (computerLower === "rock") {
            announcement.textContent = "Tie! You both chose Rock!";
        } else if (computerLower === "paper") {
            computerScore++;
            printScore();
            announcement.textContent = "You lose! Paper beats Rock!";
        } else {
            playerScore++;
            printScore();
            announcement.textContent = "You win! Rock beats Scissors!";
        }
    } else if (playerLower === "paper") {
        if (computerLower === "rock") {
            playerScore++;
            printScore();
            announcement.textContent = "You win! Paper beats Rock!";
        } else if (computerLower === "paper") {
            printScore();
            announcement.textContent = "Tie! Your both chose Paper!";
        } else {
            computerScore++;
            printScore();
            announcement.textContent = "You lose! Scissors beats Paper!";
        }
    } else {
        if (computerLower === "rock") {
            computerScore++;
            printScore();
            announcement.textContent = "You lose! Rock beats Scissors!";
        } else if (computerLower === "paper") {
            playerScore++;
            printScore();
            announcement.textContent = "You win! Scissors beats Paper!";
        } else {
            printScore();
            announcement.textContent = "Tie! You both chose Scissors!";
        }
    }

    if (playerScore === 5) {
        if (!alert("You won! The score was: " + playerScore + " to " + computerScore)) {
            window.location.reload();
        }
    } else if (computerScore === 5) {
        if(!alert("You lose! The score was: " + playerScore + " to " + computerScore)) {
            window.location.reload();
        }
    }

    return;
}

function printScore() {
    playerScoreCounter.textContent = "You: " + playerScore;
    computerScoreCounter.textContent = "Computer: " + computerScore;
}

function game() {
    const playerChoice = document.querySelectorAll('button');
        playerChoice.forEach(button => button.addEventListener('click', () => {
            playRound(button.className, getComputerChoice())}
    ));
}

game();