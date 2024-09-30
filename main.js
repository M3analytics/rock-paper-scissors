function getComputerChoice() {
    // DEFINE choices as array containing "rock", "paper", "scissors"
    const choices = ["rock", "paper", "scissors"];
    
    // GENERATE a random index using Math.random()
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // RETURN the choice at the random index from the choices array
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    // PROMPT the user for their choice (rock, paper, or scissors)
    const userInput = prompt("Enter your choice (rock, paper, or scissors):");

    // STORE the user's input in a variable
    // RETURN the user's input
    return userInput;
}
console.log(getHumanChoice());

// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}
// Function to simulate the game between human and computer for 5 rounds
function playGame() {
    // Declare score variables inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Helper function to get random computer choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        // Determine the winner
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        // Get human and computer choices (human input can be simulated for now)
        let humanChoice = prompt("Round " + round + ": Enter rock, paper, or scissors");
        let computerChoice = getComputerChoice();
        
        console.log(`Round ${round}:`);
        playRound(humanChoice, computerChoice);
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry! The computer won the game with a score of ${computerScore} to ${humanScore}`);
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();




