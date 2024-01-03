function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}   

console.log(getUserChoice())

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * options.length));
    let randomChoice=options[random];
    return randomChoice;
}

console.log(getComputerChoice()) 

function playRound(roundOutcome) {
    if (getUserChoice() === getComputerChoice()) roundOutcome = 0;
    else if ((getUserChoice() === 'rock' && getComputerChoice() === 'scissors') || (getUserChoice() === 'scissors' && getComputerChoice() === 'paper') || (getUserChoice() === 'paper' && getComputerChoice() === 'rock')) roundOutcome = 1;
    else if ((getUserChoice() === 'paper' && getComputerChoice() === 'scissors') || (getUserChoice() === 'rock' && getComputerChoice() === 'paper') || (getUserChoice() === 'scissors' && getComputerChoice() === 'rock')) roundOutcome = -1;
    else roundOutcome = -2
    return roundOutcome
}

console.log(playRound())