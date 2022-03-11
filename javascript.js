
function computerSelection() {
  return Math.floor(Math.random()*3);
}

function playerSelection() {
  const playerThrow = prompt("Rock, paper, or scissors?", "").toLowerCase();
  let selected = 0;
  if (playerThrow === 'rock') {
    return selected = 0;
  } else if (playerThrow === 'paper') {
    return selected = 1;
  } else if (playerThrow === 'scissors') {
    return selected = 2;
  } else {
    return selected = -1;
  }
}

let winner = "";
function playRound(computerSelection, playerSelection) {
  if (playerSelection > -1) {
    if (computerSelection < playerSelection) {
      if (playerSelection === 2 && computerSelection === 0) {
        //computer wins
        winner = "computer";
        return `The ${winner} wins! Rock beats scissors`;
      } else if (playerSelection === 1) {
        //user wins
        winner = "player";
        return `The ${winner} wins! Paper beats rock`;
      } else {
        winner = "player";
        return `The ${winner} wins! Scissors beat paper`;
      }
    } else if (computerSelection > playerSelection){
      if (computerSelection === 2 && playerSelection === 0) {
        // user wins
        winner = "player";
        return `The ${winner} wins! Rock beats scissors`;
      } else if (computerSelection === 1) {
        // computer wins
        winner = "computer";
        return `The ${winner} wins! Paper beats rock`;
      } else {
        winner = "computer";
        return `The ${winner} wins! Scissors beat paper`;
      }
    } else if (computerSelection === playerSelection) {
      // draw
      winner = "Nobody";
      return `${winner} wins! It's a draw`;
    }
  } else {
    return "Wrong input.";
  }
}

function game() {
  let countCompWins = 0;
  let countPlayWins = 0;
  let gameWinner = "";

  for (let i = 0; i < 5; i ++) {
    playRound(computerSelection(), playerSelection());
    if (winner === 'computer') {
      countCompWins ++;
    } else if (winner === 'player'){
      countPlayWins ++;
    }
  }
  if (countPlayWins > countCompWins) {
    gameWinner = "player";
  } else if (countPlayWins < countCompWins) {
    gameWinner = "computer";
  }
  if (countPlayWins != countCompWins) {
    return `Total tally for player: ${countPlayWins}\nTotal tally for computer: ${countCompWins}\nThe ${gameWinner} wins!`;
  } else {
    return `Total tally for player: ${countPlayWins}\nTotal tally for computer: ${countCompWins}\nIt's a draw!`;
  }
}
game();
