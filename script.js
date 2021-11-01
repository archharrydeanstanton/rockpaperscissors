const options = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors?', 'Rock');
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log('Tie game!')
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore ++;
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}!`);
    } else {
        computerScore ++;
        console.log(`You lose this round! ${playerSelection} doesn't beat ${computerSelection}!`);
    }
}

function game() {
    let round = 0;

    while (round < 5) {
        playRound();
        round++;
    }

    if (playerScore > computerScore) {
        console.log(`Game over!`);
        console.log(`You won! In ${round} rounds, you scored ${playerScore}, while the computer scored ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`Game over!`);
        console.log(`You lose! In ${round} rounds, you scored ${playerScore}, while the computer scored ${computerScore}!`);   
    }

    computerScore = 0;
    playerScore = 0;
    round = 0;
}