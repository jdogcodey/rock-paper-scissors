let computerScore = 0;
let playerScore = 0;
let runningHigh = Math.max(computerScore, playerScore)
let playerSelectionLC = '';
let i = 0;
const scoreTracker = document.createElement('div');
const results = document.createElement('div');

function playRound() {
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
            ++computerScore;
            return 'Unlucky... You lose because the Computer chose ' + computerChoice + ' which beats your ' + playerSelectionLC;
        }
        else if (totalValue == 'scissorsscissors' || totalValue == 'paperpaper' || totalValue == 'rockrock')  {
            return "You think like a Computer - it's a TIE as you both chose " + computerChoice
        }
        else return 'Something went wrong... Did you spell your choice correctly?'
    };
    results.textContent = outcome();
    document.body.appendChild(results);
    function score() {
        if (playerScore > computerScore) {
           return `You're Winning! SCORE: Player-${playerScore} : ${computerScore}-Computer`;
        }
        else {
            return `You're Losing SCORE: Player-${playerScore} : ${computerScore}-Computer`;
        };
    }
    scoreTracker.textContent = score();
    document.body.appendChild(scoreTracker);
};


const rock = document.createElement('button');
rock.textContent = 'Rock';
document.body.appendChild(rock);
rock.addEventListener('click', () => {
    playerSelectionLC = 'rock';
    playRound();
});

const paper = document.createElement('button');
paper.textContent = 'Paper';
document.body.appendChild(paper);
paper.addEventListener('click', () => {
    playerSelectionLC = 'paper';
    playRound();
});

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
document.body.appendChild(scissors);
scissors.addEventListener('click', () => {
    playerSelectionLC = 'scissors';
    playRound();
});

