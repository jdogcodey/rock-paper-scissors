function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor((Math.random() * options.length));
    let randomChoice=options[random];
    return randomChoice;
}

console.log(getComputerChoice())