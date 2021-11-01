const options = ['Rock', 'Paper', 'Scissors'];
const optionsDisplay = document.querySelector("#options");
const resultDisplay = document.querySelector("#result");
const resultMessage = document.createElement('div')
const resultScore = document.createElement('div')


const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let round = 1;


function computerPlay() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

const handleClick = (e) => {
    playerSelection = e.target.innerHTML;
    playRound(playerSelection, computerSelection);
}

options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.addEventListener("click", handleClick)
    optionsDisplay.appendChild(button);
})

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (round === 5) {
        endGame();
        round = 1;
        return;
    }

    if (playerSelection === computerSelection) {
        resultMessage.textContent = 'Tie game!';
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore ++;
        resultMessage.textContent = `You win this round! You chose ${playerSelection}, which beats ${computerSelection}.`;
    } else {
        computerScore ++;
        resultMessage.textContent = `You lose this round! You chose ${playerSelection}, which doesn't beat ${computerSelection}.`;
    }
    resultScore.textContent = `Round ${round} scores: Player = ${playerScore}. Computer = ${computerScore}.`
    resultDisplay.appendChild(resultMessage);
    resultDisplay.appendChild(resultScore);
    round ++;
}

function endGame() {
    if (playerScore > computerScore) {
        resultMessage.textContent = `Game over!`;
        resultScore.textContent = `You won! In ${round-1} rounds, you scored ${playerScore}, while the computer scored ${computerScore}!`;
    } else if (computerScore > playerScore) {
        resultMessage.textContent = `Game over!`;
        resultScore.textContent = `You lose! After ${round-1} rounds, you scored ${playerScore}, while the computer scored ${computerScore}!`;   
    }

    resultDisplay.appendChild(resultMessage);
    resultDisplay.appendChild(resultScore);

    computerScore = 0;
    playerScore = 0;
    round = 1;
}