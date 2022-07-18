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
const btnR = document.querySelector(".rock");
btnR.addEventListener("click", () => {playRound("rock")});
const btnP = document.querySelector(".paper");
btnP.addEventListener("click", () => {playRound("paper")});
const btnS = document.querySelector(".scissors");
btnS.addEventListener("click", () => {playRound("scissors")});
//const btn = document.querySelectorAll("button");
//btn.forEach((button => {
//    button.addEventListener('click', () => {playRound(button.className)})
//})); 

// --Score--
function score(text) {
    let result = text.toLowerCase();
    let winner = result.slice (4, 7);
        if (winner === "win") {
            humanScore++;
            //console.log(winner, humanScore, compScore, ties);
        }else if (winner === "los") {
            compScore++;
            //console.log(winner, humanScore, compScore, ties);
        }else {
            ties++;
            //console.log(winner, humanScore, compScore, ties);
        } return (print(humanScore, compScore, ties));
}
let humanScore = 0;
let compScore = 0;
let ties = 0;
let finish = false;

// --Print to Score--
function print(pScore, cScore, tScore) {
    document.getElementById("playerScore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = compScore;
    document.getElementById("ties").innerHTML = ties;

    if((humanScore == 5 && finish == false) || (compScore == 5 && finish == false)) {ending(humanScore, compScore)};
};

// --End score and Restart--
function ending(humanScore, compScore) {
    const game = document.querySelector(".buttons");
    const score = document.querySelector(".score");
    const scoreT = document.querySelector(".tie");
    const win = document.querySelector(".announcer");

    game.classList.add("endGame");
    score.classList.add("endGame");
    scoreT.classList.add("endGame");
    const msg = document.createElement("div");
    msg.classList.add("endMsg");

    const newGame = document.createElement("button");
    newGame.setAttribute("id", "newGame");
    newGame.innerHTML = "Restart";
    newGame.addEventListener("click", () => {
        location.reload();  
    })

    if (humanScore == 5 && finish == false) {
        msg.textContent = `Congrats! You won by ${humanScore} X ${compScore}!`;
        finish = true;
    } else if(compScore == 5 && finish == false) {
        msg.textContent = `Too bad. You lost by ${humanScore} X ${compScore}!`;
        finish = true;
    };

    win.appendChild(msg);
    win.appendChild(newGame);
    return;
}
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