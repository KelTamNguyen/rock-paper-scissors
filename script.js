// Game Variables
const CHOICES = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0
let round = 1;
let drawCount = 0;

// DOM/UI
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let p1Score = document.querySelector('#p1');
let cpuScore = document.querySelector('#cpu');
let roundNumber = document.querySelector('#round');
let result = document.querySelector('#result');
let modalBg = document.querySelector('.modal-bg');
let modalMessage = document.querySelector('.modal h2');
let playAgain = document.querySelector('.play-again')
let modalClose = document.querySelector('.modal-close');

rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissors.addEventListener('click', () => handleClick('scissors'));
playAgain.addEventListener('click', () => resetGame());
modalClose.addEventListener('click', () => modalBg.classList.remove('bg-active'));

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() +  string.slice(1).toLowerCase();
}

function openModal(message) {
    modalMessage.textContent = message;
    modalBg.classList.add('bg-active');
}

function handleClick(value) {
    let computerChoice = getComputerChoice();
    playRound(value, computerChoice);
}

function playRound(humanChoice, computerChoice) {
    if (humanScore !== 5 && computerScore !== 5) {
        round++;
        roundNumber.textContent = round;
        if (humanChoice === 'rock' && computerChoice === 'scissors' || 
            humanChoice === 'scissors' && computerChoice=== 'paper' || 
            humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            p1Score.textContent = humanScore;
            result.textContent = `You Win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`;
            if (humanScore === 5) {
                openModal('You Win!');
            }
        } 
        else if (humanChoice === 'rock' && computerChoice === 'paper' || 
                humanChoice === 'paper' && computerChoice === 'scissors' || 
                humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            cpuScore.textContent = computerScore;
            result.textContent = `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`;
            if (computerScore === 5) {
                openModal('Game Over');
            }
        }
        else if (humanChoice === computerChoice) {
            drawCount++;
            result.textContent = `Draw (x${drawCount})!`;
        }
    }
    // console.log(result.textContent);
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