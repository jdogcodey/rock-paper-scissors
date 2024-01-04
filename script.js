let playerSelection = prompt("Rock, Paper, or Scissors?");
let playerSelectionLC = playerSelection.toLowerCase();

let playerChoice;

if (playerSelectionLC === 'rock') {
    playerChoice = 10
}
else if (playerSelectionLC === 'paper') {
    playerChoice = 5
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

function outcome() {
    if (totalValue == 11 || totalValue == 10 || totalValue == 4) {
        return 'WIN'
    }
    else if (totalValue == 13 || totalValue == 6) {
        return "LOSS"
    }
    else if (totalValue == 15 || totalValue == 8 || totalValue == 2)  {
        return "TIE"
    }
};

console.log('outcome ' + outcome())
