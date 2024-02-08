let computerScore = 0;
let playerScore = 0;
let runningHigh = 0;
let playerSelectionLC = '';
let i = 0;

    console.log(`${runningHigh} game`)
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

const scoreTracker = document.createElement('div');
const results = document.createElement('div');


function playRound() {
    console.log(`${runningHigh} playRound`)
        function getComputerChoice() {
            let options = ["rock", "paper", "scissors"];
            let random = Math.floor((Math.random() * options.length));
            let randomChoice = options[random];
            return randomChoice;
        };

        let computerChoice = getComputerChoice();

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
        runningHigh = Math.max(computerScore, playerScore);
        if (runningHigh >= 5) {
            rock.remove();
            paper.remove();
            scissors.remove();
            results.remove();
            scoreTracker.remove();
            function final() {
                if (playerScore > computerScore) {
                    return `You WIN! ${playerScore}-${computerScore}`;
                }
                else {
                    return `You got beat ${computerScore}-${playerScore} by a Computer...`;
                }
            };
            let endGame = document.createElement('div');
            endGame.textContent = final();
            document.body.appendChild(endGame);
        }
    };




