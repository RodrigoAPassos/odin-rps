
function computerPlay () {
    const rps = ["Rock", "Paper", "Scissors"];
    let computerChoice = rps[Math.floor (Math.random () * rps.length)]
    return computerChoice;
}

function playRound(playerSelection, compSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = compSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You Win! Rock beats Scissors";
    }else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You Win! Scissors beats Paper";
    }else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You Win! Paper beats Rock";
    }else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You Lose! Rock beats Scissors";
    }else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You Lose! Scissors beats Paper";
    }else /*if (playerChoice === "rock" && computerChoice === "paper")*/ {
        return "You Lose! Paper beats Rock";
    }
}

//let compSelection = computerPlay();
//let playerSelection = prompt("Choose between: Rock, Paper and Scissors", "");
//console.log(playRound(playerSelection, compSelection));

function game(){
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

game();
//console.log(playRound(playerSelection, compSelection));
