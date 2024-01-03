function getUserChoice() {
    const choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}   

console.log(getUserChoice())

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor((Math.random() * options.length));
    const randomChoice=options[random];
    return randomChoice;
}

console.log(getComputerChoice()) 

function playRound() {
    if (getUserChoice() === 'rock' && getComputerChoice() === 'scissors') return "Rock beats Scissors so you WIN!"
    else if (getUserChoice() ==='scissors' && getComputerChoice() === 'paper') return "Scissors beats Paper so you WIN!"
    else if (getUserChoice() === 'paper' && getComputerChoice() === 'rock') return"Paper beats Rock so you WIN!"
    else if (getUserChoice() === 'rock' && getComputerChoice() ==='paper') return "Paper beats Rock... You're a loser!"
    else if (getUserChoice() === 'scissors' && getComputerChoice() === 'rock') return "Rock beats Scissors... You're a loser!"
    else if (getUserChoice() === 'paper' && getComputerChoice() === 'scissors') return "Scissors beats Paper... You're a loser!"
    else if (getUserChoice() === 'rock' && getComputerChoice() === 'rock') return "It's a Draw! Play Again"
    else if (getUserChoice() === 'scissors' && getComputerChoice() === 'scissors') return "It's a Draw! Play Again"
    else if (getUserChoice() === 'paper' && getComputerChoice() === 'paper') return "It's a Draw! Play Again"
}

console.log(playRound())