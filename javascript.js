function getComputerChoice() {
    let num = Math.random();

    if (num <= 1/3) {
        return "rock";
    }

    if (num <= 2/3) {
        return "paper";
    }
    return "scissors";
    // generate using Math.random
    // if the number < 0.33 -> rock
    // if the number < 0.66 -> paper
    // else -> scissors
    // return string
}

function getHumanChoice() {
    let userChoice = "";

    do {
        userChoice = prompt("Rock, paper, or scissors?");
        userChoice = userChoice.toLowerCase();
    } while(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors");

    return userChoice;

    // prompt the user to enter a valid input (.toLowerCase it)
    // do while loop (while var.toLowerCase !== "rock" ||....       { prompt again })
    // return string
}

function playRound(computerSelection, humanSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            alert("You lose! Computer guessed paper!");
            computerScore++;
        }

        if (computerSelection === "rock") {
            alert("It's a tie! Computer guessed rock!");
        }

        if (computerSelection === "scissors") {
            alert("You win! Computer guessed scissors!");
            humanScore++;
        }
    }


    if (humanSelection === "paper") {
        if (computerSelection === "paper") {
            alert("It's a tie! Computer guessed paper!");
        }

        if (computerSelection === "rock") {
            alert("You win! Computer guessed rock!");
            humanScore++;
        }

        if (computerSelection === "scissors") {
            alert("You lose! Computer guessed scissors!");
            computerScore++;
        }
    }


    if (humanSelection === "scissors") {
        if (computerSelection === "paper") {
            alert("You win! Computer guessed paper!");
            humanScore++;
        }

        if (computerSelection === "rock") {
            alert("You lose! Computer guessed rock!");
            computerScore++;
        }

        if (computerSelection === "scissors") {
            alert("It's a tie! Computer guessed scissors!");
        }
    }

    // compare computerSelection and humanSelection using nested if statements
    // console.log a message
    // increment computerScore or humanScore

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
    
        playRound(computerSelection, humanSelection);
        console.log("\n");
    }
}

let computerScore = 0;
let humanScore = 0;

let computerSelection = 0;
let humanSelection = 0;

playGame();

if (humanScore > computerScore) {
    alert(`You won with a score of ${humanScore} to ${computerScore}!!!!`);
} else if (computerScore > humanScore) {
    alert(`You lost with a score of ${humanScore} to ${computerScore}!`);
} else {
    alert(`It was a tie! ${humanScore} to ${computerScore}`);
}


