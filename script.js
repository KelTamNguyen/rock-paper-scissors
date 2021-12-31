console.log('The script is working');
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var round = 1;
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var p1Score = document.querySelector('#p1');
var cpuScore = document.querySelector('#cpu');
var roundNumber = document.querySelector('#round');
var finalMessage = '';

function handleClick(value) {
    let computerSelection = computerPlay();
    console.log('computer selection:', computerSelection);
    playRound(value, computerSelection);
}

rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissors.addEventListener('click', () => handleClick('scissors'));

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() +  string.slice(1).toLowerCase();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1
    p1Score.textContent = playerScore;
    cpuScore.textContent = computerScore;
    roundNumber.textContent = round;
}

function playRound(playerSelection, computerSelection) {
    if (playerScore !== 5 && computerScore !== 5) {
        round++;
        roundNumber.textContent = round;
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            p1Score.textContent = playerScore;
            console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
            if (playerScore === 5) {
                console.log('Congratulations! You Won!');
                resetGame();
            }
        } 
        else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            cpuScore.textContent = computerScore;
            console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
            if (computerScore === 5) {
                console.log('Game Over');
                resetGame();
            }
        }
        else if (playerSelection === computerSelection) {
            console.log('Draw!');
        }
    }
}