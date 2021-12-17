console.log('The script is working');
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;

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
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            computerScore++;
            return 'Draw!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'rock') {
            computerScore++;
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            computerScore++;
            return 'Draw!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            computerScore++;
            return 'Draw!';
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`-- Round ${i} --`);
        //const playerSelection = computerPlay();
        let playerSelection = prompt('Choose Rock, Paper or Scissors!');
        const computerSelection = computerPlay();
        console.log('player selection:', playerSelection);
        // console.log('computer selection:', computerSelection);
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`player ${playerScore} - ${computerScore} computer`);
    }
}

game();