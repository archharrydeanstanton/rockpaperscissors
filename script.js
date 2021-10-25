function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const randomNumberBetween0and2 = Math.floor(Math.random() * 3);
    console.log(randomNumberBetween0and2);
    return moves[randomNumberBetween0and2];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, scissors: shoot!", "Rock");
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection == computerSelection) {
        result = "don't win or lose";
        winner = "Nobody";
        loser = "anybody";
    } else if (
        computerSelection == 'Rock' && playerSelection == 'Scissors' ||
        computerSelection == 'Scissors' && playerSelection == 'Paper' ||
        computerSelection == 'Paper' && playerSelection == 'Rock') {
            result = 'lose';
            winner = computerSelection;
            loser = playerSelection;
            computerScore ++;
        } else {
            result = 'win';
            winner = playerSelection;
            loser = computerSelection;
            playerScore ++;
        }
    const resultMessage = `You ${result}! ${winner} beats ${loser}.`;
    alert(resultMessage);
    return {playerScore, computerScore, resultMessage};
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let round = playRound();
        playerScore += round.playerScore;
        computerScore += round.computerScore;
    } 

    if (playerScore > computerScore) {
        
    }

    alert(`Thanks for playing! The final score was ${playerScore} to ${computerScore}.`)
}