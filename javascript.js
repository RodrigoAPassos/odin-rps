// --Play of the Computer--
function computerPlay () {
    const rps = ["rock", "paper", "scissors"];
    let computerChoice = rps[Math.floor (Math.random () * rps.length)]
    return computerChoice;
}

// --One Round of Rock, Paper, Scissors--
function playRound(playerSelection) {
    let playerChoice = playerSelection;
    let computerChoice = computerPlay();
    //console.log(playerSelection);
    //console.log(computerChoice);

    if (playerChoice === computerChoice) {
        return score("It's a tie!");
    }else if (playerChoice === "rock" && computerChoice === "scissors") {
        return score("You Win! Rock beats Scissors");
    }else if (playerChoice === "scissors" && computerChoice === "paper") {
        return score("You Win! Scissors beats Paper");
    }else if (playerChoice === "paper" && computerChoice === "rock") {
        return score("You Win! Paper beats Rock");
    }else if (playerChoice === "scissors" && computerChoice === "rock") {
        return score("You Lose! Rock beats Scissors");
    }else if (playerChoice === "paper" && computerChoice === "scissors") {
        return score("You Lose! Scissors beats Paper");
    }else /*if (playerChoice === "rock" && computerChoice === "paper")*/ {
        return score("You Lose! Paper beats Rock");
    }
}

// --Play of the Player--
const btn = document.querySelectorAll("button");
btn.forEach((button => {
    button.addEventListener('click', () => {playRound(button.className)})
})); 

// --Score--
function score(text) {
    let result = text.toLowerCase();
    //let humanScore = 0;
    //let compScore = 0;
    //let ties = 0;
    let winner = result.slice (4, 7);
        if (winner === "win") {
            humanScore++;
            console.log(winner, humanScore, compScore);
        }else if (winner === "los") {
            compScore++;
            console.log(winner, humanScore, compScore);
        }else {
            ties++;
            console.log(winner, humanScore, compScore);
        } return (winner, humanScore, compScore, ties);
}
let humanScore = 0;
let compScore = 0;
let ties = 0;
const playerScore = document.querySelector(".playerScore");
playerScore.textContent = `${humanScore}`
const computerScore = document.querySelector(".computerScore");
computerScore.textContent = `${compScore}`;
const tie = document.querySelector(".ties ");
tie.textContent = `${ties}`



// --Game of 5 Rounds--
/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let compSelection = computerPlay();
        let playerSelection = prompt("Choose between: Rock, Paper and Scissors", "");
        let result = playRound(playerSelection, compSelection);
        console.log (result);
        let winner = result.slice (4, 7);
        if (winner === "Win") {
            playerScore++;
        }else if (winner === "Los") {
            computerScore++;
        }else {
            ties++;
        }
    }
    return (console.log ("You scored " + playerScore + "! I scored " + computerScore + "! And " + ties + " times was a tie."))
}

game(); */