// Game Variables
const CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 1;
let drawCount = 0;

// DOM References
const btnGroup = document.querySelector('#rps-btn-group');
const p1Score = document.querySelector('#p1');
const cpuScore = document.querySelector('#cpu');
const roundNumber = document.querySelector('#round');
const result = document.querySelector('#result');
const modalBg = document.querySelector('.modal-bg');
const modalMessage = document.querySelector('.modal h2');
const playAgain = document.querySelector('.play-again')
const modalClose = document.querySelector('.modal-close');

// Add Event Listeners
playAgain.addEventListener('click', () => resetGame());
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});

// Using Event Delegation to cut down on the amount of listeners being added 
btnGroup.addEventListener('click', (e) =>{
    let target = e.target;
  
    switch(target.id) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
    }
  });

// Functions
function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() +  string.slice(1).toLowerCase();
}

function openModal(message) {
    modalMessage.textContent = message;
    modalBg.classList.add('bg-active');
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log(computerSelection, round);
    if (playerScore !== 5 && computerScore !== 5) {
        round++;
        roundNumber.textContent = round;
        if (playerSelection === 'rock' && computerSelection === 'scissors' || 
            playerSelection === 'scissors' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            p1Score.textContent = playerScore;
            result.textContent = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
            if (playerScore === 5) {
                openModal('You Win!');
            }
        } 
        else if (playerSelection === 'rock' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'scissors' || 
            playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            cpuScore.textContent = computerScore;
            result.textContent = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
            if (computerScore === 5) {
                openModal('Game Over');
            }
        }
        else if (playerSelection === computerSelection) {
            drawCount++;
            result.textContent = `Draw (x${drawCount})!`;
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1
    drawCount = 0;
    p1Score.textContent = playerScore;
    cpuScore.textContent = computerScore;
    roundNumber.textContent = round;
    modalBg.classList.remove('bg-active');
}
