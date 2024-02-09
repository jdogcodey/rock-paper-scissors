let computerScore = 0;
let playerScore = 0;
let runningHigh = 0;
let playerSelectionLC = '';
let i = 0;
document.body.style.backgroundColor = 'red';

const rock = document.createElement('img');
rock.textContent = 'Rock';
document.body.appendChild(rock);
rock.addEventListener('click', () => {
    playerSelectionLC = 'rock';
    playRound();
});
rock.src = "rock.png";
rock.style.display = "block";
rock.style.marginLeft = "auto";
rock.style.marginRight = "auto";
rock.style.width = "auto";
rock.style.maxHeight = "170px";

const paper = document.createElement('img');
paper.textContent = 'Paper';
document.body.appendChild(paper);
paper.addEventListener('click', () => {
    playerSelectionLC = 'paper';
    playRound();
});
paper.src = "paper.png";
paper.style.display = "block";
paper.style.marginLeft = "auto";
paper.style.marginRight = "auto";
paper.style.width = "auto";
paper.style.maxHeight = "170px";


const scissors = document.createElement('img');
scissors.textContent = 'Scissors';
document.body.appendChild(scissors);
scissors.addEventListener('click', () => {
    playerSelectionLC = 'scissors';
    playRound();
});
scissors.src = "scissors.png";
scissors.style.display = "block";
scissors.style.marginLeft = "auto";
scissors.style.marginRight = "auto";
scissors.style.width = "auto";
scissors.style.maxHeight = "170px";


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
        results.style.textAlign = "center";
        results.style.fontSize = "20px";
        results.style.fontWeight = "600";
        document.body.appendChild(results);
        function score() {
            return `SCORE: Player-${playerScore} : ${computerScore}-Computer`;
        
        }
        scoreTracker.textContent = score();
        scoreTracker.style.textAlign = "center";
        scoreTracker.style.fontSize = "40px";
        scoreTracker.style.fontWeight = "800";
        scoreTracker.style.color = "white";
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
            endGame.style.textAlign = "center";
            endGame.style.fontSize = "80px";
            endGame.style.fontWeight = "800";
            endGame.style.color = "white";
            document.body.appendChild(endGame);
        }
    };




