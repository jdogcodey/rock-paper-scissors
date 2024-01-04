let playerSelection = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC = playerSelection.toLowerCase();

let playerChoice;

if (playerSelectionLC === 'rock') {
    playerChoice = 3
}
else if (playerSelectionLC === 'paper') {
    playerChoice = 2
} 
else if (playerSelectionLC === 'scissors') {
    playerChoice = 1
}
else playerChoice = 100;

console.log(playerChoice)

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * options.length));
    let randomChoice=options[random];
    if (randomChoice === 'rock') {
        return 5
    }
    else if (randomChoice === 'paper') {
        return 3
    } 
    else if (randomChoice === 'scissors') {
        return 1
    };
};

let computerChoice = getComputerChoice();

console.log('computerChoice' + computerChoice);

let totalValue = computerChoice + playerChoice;

console.log('totalValue' + totalValue)

function outcome(totalValue) {
    if (totalValue = 11 || 10 || 4) {
        return 1
    }
    else if (totalValue = 13 || 6) {
        return -1
    }
    else if (totalValue = 15 || 8 || 2)  {
        return 0
    }
}

console.log('outcome ' + outcome())
