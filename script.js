const options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function randomNumberZeroOneTwo() {
    return Math.floor(Math.random() * 3)
}

function computerPlay() {
    return options[randomNumberZeroOneTwo()]
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?", "rock");
    playerSelection = titleCase(playerSelection);
    computerSelection = titleCase(computerPlay());

    if (playerSelection === computerSelection) {
        let result = "don't win or lose";
        let winner = "Nobody";
        let loser = "anybody";
        let resultMessage = `You ${result}! ${winner} beats ${loser}.`
        tieScore ++;
        return playerScore, computerScore, resultMessage;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock' ) || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        result = "Lose";
        winner = computerSelection;
        loser = playerSelection;
        resultMessage = `You ${result}! ${winner} beats ${loser}.`
        computerScore ++;
        return playerScore, computerScore, resultMessage;
    } else {
        result = "Win";
        winner = playerSelection;
        loser = computerSelection;
        resultMessage = `You ${result}! ${winner} beats ${loser}.`
        playerScore ++;
        return playerScore, computerScore, resultMessage;
    }
}

function game() {
    playSingleRound();
    playSingleRound();
    playSingleRound();
    playSingleRound();
    playSingleRound();
    let resultMessage = `You scored ${playerScore}! The computer scored ${computerScore}. There were ${tieScore} tie games.`;
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    alert(resultMessage);
    return resultMessage;
}