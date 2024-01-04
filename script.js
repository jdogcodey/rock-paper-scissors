let computerScore = 0
let playerScore = 0

function playRound() {
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
};

let roundOne = playRound();

console.log('ROUND 1:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);

let roundTwo= playRound();

console.log('ROUND 2:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);

let roundThree = playRound();

console.log('ROUND 3:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);

let roundFourth = playRound();

console.log('ROUND 4:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);

let roundFive = playRound();

console.log('ROUND 5:\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);

if (playerScore > computerScore) {
    console.log('You won a best of five! You got ' + playerScore + ' and the Computer got ' + computerScore);
}
else if (playerScore < computerScore) {
    console.log('You lost the best of five! The computer got ' + computerScore + ' and you only got ' + playerScore);
}
else console.log("It's a TIE over the best of five!")
