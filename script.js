let computerScore = 0
let playerScore = 0

let playerSelection = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC = playerSelection.toLowerCase();

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * options.length));
    let randomChoice = options[random];
    return randomChoice;
};

let computerChoice = getComputerChoice();

console.log('The Computer Chose ' + computerChoice);

let totalValue = playerSelectionLC + computerChoice;

function outcome() {
    if (totalValue == 'rockscissors' || totalValue == 'paperrock' || totalValue == 'scissorspaper') {
        playerScore++;
        return 'You WIN because ' + playerSelectionLC + ' beats ' + computerChoice;
    }
    else if (totalValue == 'rockpaper' || totalValue == 'scissorsrock' || totalValue == 'paperscissors') {
        computerScore++;
        return 'Unlucky... You lose because the Computer chose ' + computerChoice + ' which beats your ' + playerSelectionLC;
    }
    else if (totalValue == 'scissorsscissors' || totalValue == 'paperpaper' || totalValue == 'rockrock')  {
        return "You think like a Computer - it's a TIE as you both chose " + computerChoice
    }
    else return 'Something went wrong... Did you spell your choice correctly?'
};

console.log(outcome());

console.log('ROUND 1:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)

let playerSelection2 = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC2 = playerSelection2.toLowerCase();

let computerChoice2 = getComputerChoice();

console.log('The Computer Chose ' + computerChoice2);

let totalValue2 = playerSelectionLC2 + computerChoice2;

function outcome2() {
    if (totalValue2 == 'rockscissors' || totalValue2 == 'paperrock' || totalValue2 == 'scissorspaper') {
        playerScore++;
        return 'You WIN because ' + playerSelectionLC2 + ' beats ' + computerChoice2;
    }
    else if (totalValue2 == 'rockpaper' || totalValue2 == 'scissorsrock' || totalValue2 == 'paperscissors') {
        computerScore++;
        return 'Unlucky... You lose because the Computer chose ' + computerChoice2 + ' which beats your ' + playerSelectionLC2;
    }
    else if (totalValue2 == 'scissorsscissors' || totalValue2 == 'paperpaper' || totalValue2 == 'rockrock')  {
        return "You think like a Computer - it's a TIE as you both chose " + computerChoice2
    }
    else return 'Something went wrong... Did you spell your choice correctly?'
};

console.log(outcome2());

console.log('ROUND 2:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)

let playerSelection3 = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC3 = playerSelection3.toLowerCase();

let computerChoice3 = getComputerChoice();

console.log('The Computer Chose ' + computerChoice3);

let totalValue3 = playerSelectionLC3 + computerChoice3;

function outcome3() {
    if (totalValue3 == 'rockscissors' || totalValue3 == 'paperrock' || totalValue3 == 'scissorspaper') {
        playerScore++;
        return 'You WIN because ' + playerSelectionLC3 + ' beats ' + computerChoice3;
    }
    else if (totalValue3 == 'rockpaper' || totalValue3 == 'scissorsrock' || totalValue3 == 'paperscissors') {
        computerScore++;
        return 'Unlucky... You lose because the Computer chose ' + computerChoice3 + ' which beats your ' + playerSelectionLC3;
    }
    else if (totalValue3 == 'scissorsscissors' || totalValue3 == 'paperpaper' || totalValue3 == 'rockrock')  {
        return "You think like a Computer - it's a TIE as you both chose " + computerChoice3
    }
    else return 'Something went wrong... Did you spell your choice correctly?'
};

console.log(outcome3());

console.log('ROUND 3:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)

let playerSelection4 = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC4 = playerSelection4.toLowerCase();

let computerChoice4 = getComputerChoice();

console.log('The Computer Chose ' + computerChoice4);

let totalValue4 = playerSelectionLC4 + computerChoice4;

function outcome4() {
    if (totalValue4 == 'rockscissors' || totalValue4 == 'paperrock' || totalValue4 == 'scissorspaper') {
        playerScore++;
        return 'You WIN because ' + playerSelectionLC4 + ' beats ' + computerChoice4;
    }
    else if (totalValue4 == 'rockpaper' || totalValue4 == 'scissorsrock' || totalValue4 == 'paperscissors') {
        computerScore++;
        return 'Unlucky... You lose because the Computer chose ' + computerChoice4 + ' which beats your ' + playerSelectionLC4;
    }
    else if (totalValue4 == 'scissorsscissors' || totalValue4 == 'paperpaper' || totalValue4 == 'rockrock')  {
        return "You think like a Computer - it's a TIE as you both chose " + computerChoice4
    }
    else return 'Something went wrong... Did you spell your choice correctly?'
};

console.log(outcome4());

console.log('ROUND 4:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)


let playerSelection5 = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC5 = playerSelection5.toLowerCase();

let computerChoice5 = getComputerChoice();

console.log('The Computer Chose ' + computerChoice5);

let totalValue5 = playerSelectionLC5 + computerChoice5;

function outcome5() {
    if (totalValue5 == 'rockscissors' || totalValue5 == 'paperrock' || totalValue5 == 'scissorspaper') {
        playerScore++;
        return 'You WIN because ' + playerSelectionLC5 + ' beats ' + computerChoice5;
    }
    else if (totalValue5 == 'rockpaper' || totalValue5 == 'scissorsrock' || totalValue5 == 'paperscissors') {
        computerScore++;
        return 'Unlucky... You lose because the Computer chose ' + computerChoice5 + ' which beats your ' + playerSelectionLC5;
    }
    else if (totalValue5 == 'scissorsscissors' || totalValue5 == 'paperpaper' || totalValue5 == 'rockrock')  {
        return "You think like a Computer - it's a TIE as you both chose " + computerChoice5
    }
    else return 'Something went wrong... Did you spell your choice correctly?'
};

console.log(outcome5());

console.log('ROUND 5:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)

if (playerScore > computerScore) {
    console.log('You WON in a Best of Five - You must be smarter than a computer as you scored ' + playerScore + ' and the Computer scored ' + computerScore);
}
else if (computerScore > playerScore) {
    console.log('You LOST in a Best of Five - Unlucky. The Computer scored ' + computerScore + ' while you got a measly ' + playerScore);
}
else console.log("It's a draw! You both scored " + computerScore)