// Game Variables
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var round = 1;
var drawCount = 0;

// DOM/UI
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var p1Score = document.querySelector('#p1');
var cpuScore = document.querySelector('#cpu');
var roundNumber = document.querySelector('#round');
var result = document.querySelector('#result');
var modalBg = document.querySelector('.modal-bg');
var modalMessage = document.querySelector('.modal h2');
var playAgain = document.querySelector('.play-again')
var modalClose = document.querySelector('.modal-close');

rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissors.addEventListener('click', () => handleClick('scissors'));
playAgain.addEventListener('click', () => resetGame());
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});

function handleClick(value) {
    let computerSelection = computerPlay();
    playRound(value, computerSelection);
}


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() +  string.slice(1).toLowerCase();
}

function openModal(message) {
    modalMessage.textContent = message;
    modalBg.classList.add('bg-active');
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

function playRound(playerSelection, computerSelection) {
    if (playerScore !== 5 && computerScore !== 5) {
        round++;
        roundNumber.textContent = round;
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            p1Score.textContent = playerScore;
            result.textContent = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
            if (playerScore === 5) {
                openModal('You Win!');
            }
        } 
        else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
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