console.log("Hello World! from folder");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

console.log("Computer select:", getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("please enter your choice! (Rock, Papper or Scissors?").toUpperCase();
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Draw";
    }else if((humanChoice === "ROCK") && (computerChoice === "PAPER")){
        ComputerScore++;
        return "Computer Wins!";
    }else if((humanChoice === "PAPER") && (computerChoice === "SCISSORS")){
        ComputerScore++;
        return "Computer Wins!";
    }else if((humanChoice === "SCISSORS") && (computerChoice === "ROCK")){
        ComputerScore++;
        return "Computer Wins!";
    }else{
        humanScore++;
        return "Human Wins!";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
        alert(`Current Score:\n Human: ${humanScore}\n Computer: ${ComputerScore}`);
    }
    if(humanScore > ComputerScore){
        alert("Human is the WINNER!");
    }else if(ComputerScore > humanScore){
        alert("Computer is the WINNER!");
    }else{
        alert("Game is a DRAW");
    }
}

playGame();
