
let playerScore=0;
let computerScore=0;
let playerSelection;
let computerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const showPlayerSelection = document.querySelector('.selection-player');
const showComputerSelection = document.querySelector('.selection-computer');
const showResult = document.querySelector('.para');
const showPlayerScore = document.querySelector('.player-score');
const showComputerScore = document.querySelector('.computer-score');

//getUserChoice();
//getComputerChoice();
//playRound(getUserChoice,getUserChoice);
//game ();

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
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }
    return computerChoice;
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
        computerScore++;
    }
        else if (x==='Rock'&& y==='Scissors') {
        result = 'You Win! Rock beats Scissors';
        playerScore++;
    }
    //user paper case
        else if (x==='Paper'&& y==='Rock') {
        result = 'You Win! Paper beats Rock';
        playerScore++;
    }
        else if (x==='Paper'&& y==='Paper') {
        result = 'Its a tie!';
    }
        else if (x==='Paper'&& y==='Scissors') {
        result = 'You Loose! Scissors beats Paper';
        computerScore++;
    }
    //user scissors case
        else if (x==='Scissors'&& y==='Rock') {
        result = 'You Loose! Rock beats Scissors';
        computerScore++;
    }
        else if (x==='Scissors'&& y==='Paper') {
        result = 'You Win! Scissors beats Paper';
        playerScore++;
    }
        else if (x==='Scissors'&& y==='Scissors') {
        result = 'Its a tie!';
    }
    
    } else {
        // default case 
            result = 'Choose your weapon';
    }
    return result;
}

function game(){
  play();
  plScore.textContent = playerScore;
  compScore.textContent = computerScore;
}