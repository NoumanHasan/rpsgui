
let playerScore=0;
let computerScore=0;
let playerSelection;
let computerSelection;

const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const ps = document.querySelector('.selection-player');
const cs = document.querySelector('.selection-computer');
const showResult = document.querySelector('.para');
const plScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');

//getUserChoice();
//getComputerChoice();
//playRound(getUserChoice,getUserChoice);
game ();
function play () {
  let userChoice;
  b1.addEventListener('click', () => {
    userChoice = ['Rock', '✊🏻'];
    ps.textContent = userChoice[1];
    playerSelection = userChoice[0];
    getComputerChoice();
    playRound(playerSelection,computerSelection);
    plScore.textContent = playerScore;
    compScore.textContent = computerScore;
  });
  b2.addEventListener('click', () => {
    userChoice = ['Paper', '✋🏻'];
    ps.textContent = userChoice[1];
    playerSelection = userChoice[0];
    getComputerChoice();
    playRound(playerSelection, computerSelection);
    plScore.textContent = playerScore;
    compScore.textContent = computerScore;
  });
  b3.addEventListener('click', () => {
    userChoice = ['Scissors', '✌🏻'];
    ps.textContent = userChoice[1];
    playerSelection = userChoice[0];
    getComputerChoice();
    playRound(playerSelection, computerSelection);
    plScore.textContent = playerScore;
    compScore.textContent = computerScore;
  });
}
//function to get computer choice
function getComputerChoice () {
    let computerChoice;
    let rand = Math.floor(Math.random() * 3+1);
    switch (rand) {
        case 1:
            computerChoice = ['Rock','✊🏻'];
            break;
        case 2:
            computerChoice = ['Paper','✋🏻'];
            break;
        case 3:
            computerChoice = ['Scissors','✌🏻'];
            break;
    }
    cs.textContent = computerChoice[1];
    computerSelection = computerChoice[0];
}


function playRound(x,y) {
    let result;
    if (x === 'Rock' || x === 'Paper' || x === 'Scissors') {
    
    //user rock case
             if (x==='Rock'&& y==='Rock') {
        result = 'Its a tie!';
    }
        else if (x==='Rock'&& y==='Paper') {
        result = 'You Loose! Paper beats Rock';
        computerScore += 1;
    }
        else if (x==='Rock'&& y==='Scissors') {
        result = 'You Win! Rock beats Scissors';
        playerScore += 1;
    }
    //user paper case
        else if (x==='Paper'&& y==='Rock') {
        result = 'You Win! Paper beats Rock';
        playerScore += 1;
    }
        else if (x==='Paper'&& y==='Paper') {
        result = 'Its a tie!';
    }
        else if (x==='Paper'&& y==='Scissors') {
        result = 'You Loose! Scissors beats Paper';
        computerScore += 1;
    }
    //user scissors case
        else if (x==='Scissors'&& y==='Rock') {
        result = 'You Loose! Rock beats Scissors';
        computerScore += 1;
    }
        else if (x==='Scissors'&& y==='Paper') {
        result = 'You Win! Scissors beats Paper';
        playerScore += 1;
    }
        else if (x==='Scissors'&& y==='Scissors') {
        result = 'Its a tie!';
    }
    
    } else {
        // default case 
            result = 'Choose your weapon';
    }
    showResult.textContent = result;
}

function game(){
  play();
  plScore.textContent = playerScore;
  compScore.textContent = computerScore;
}