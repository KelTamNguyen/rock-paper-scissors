console.log('The script is working');
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            console.log('Draw!');
            return 'Draw!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'rock') {
            computerScore++;
            console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            console.log('Draw!');
            return 'Draw!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            console.log('Draw!');
            return 'Draw!';
        }
    }
}

function game() {
    // for (let i = 1; i <= 5; i++) {
    //     console.log(`-- Round ${i} --`);
    //     let playerSelection = prompt('Choose Rock, Paper or Scissors!');
    //     const computerSelection = computerPlay();
    //     console.log('player selection:', playerSelection);
    //      console.log('computer selection:', computerSelection);
    //     //playerSelection = playerSelection.toLowerCase();
    //     console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    //     console.log(`player ${playerScore} - ${computerScore} computer`);
    // }
}

game();