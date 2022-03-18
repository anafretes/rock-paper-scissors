function computerSelection() {
  const selection =  Math.floor(Math.random()*3);
  return selection;
}

function playerSelection(e) {
  const playerThrow = e.target.textContent.toLowerCase();
  let selected = 0;
  let playerValue = "The player's choice was ";
  if (playerThrow === 'rock') {
    playerValue += playerThrow;
    playerPara.textContent = playerValue;
    return selected = 0;
  } else if (playerThrow === 'paper') {
    playerValue += playerThrow;
    playerPara.textContent = playerValue;
    return selected = 1;
  } else if (playerThrow === 'scissors') {
    playerValue += playerThrow;
    playerPara.textContent = playerValue;
    return selected = 2;
  } else {
    playerValue = "An error occurred";
    playerPara.textContent = playerValue;
    return selected = -1;
  }
}

let winner = "";
function playRound(e) {

    const compSelection = computerSelection();
    const playSelection = playerSelection(e);

    let roundResult = "";

    let compValue = "The computer's choice was ";
    if (compSelection == 0) {
      compValue += 'rock';
    } else if (compSelection == 1) {
      compValue += 'paper';
    } else if (compSelection == 2) {
      compValue += 'scissors';
    }

    computerPara.textContent = compValue;
    if (playSelection > -1) {
      if (compSelection < playSelection) {
        if (playSelection === 2 && compSelection === 0) {
          //computer wins
          winner = "computer";
          roundResult = `The ${winner} wins this round! Rock beats scissors`;
          resultPara.textContent = roundResult;
        } else if (playSelection === 1) {
          //user wins
          winner = "player";
          roundResult = `The ${winner} wins this round! Paper beats rock`;
          resultPara.textContent = roundResult;
        } else {
          winner = "player";
          roundResult = `The ${winner} wins this round! Scissors beat paper`;
          resultPara.textContent = roundResult;
        }
      } else if (compSelection > playSelection){
        if (compSelection === 2 && playSelection === 0) {
          // user wins
          winner = "player";
          roundResult = `The ${winner} wins this round! Rock beats scissors`;
          resultPara.textContent = roundResult;
        } else if (compSelection === 1) {
          // computer wins
          winner = "computer";
          roundResult = `The ${winner} wins this round! Paper beats rock`;
          resultPara.textContent = roundResult;
        } else {
          winner = "computer";
          roundResult = `The ${winner} wins this round! Scissors beat paper`;
          resultPara.textContent = roundResult;
        }
      } else if (compSelection === playSelection) {
        // draw
        winner = "Nobody";
        roundResult = `${winner} wins this round! It's a draw`;
        resultPara.textContent = roundResult;
      }
    } else {
      resultPara.textContent ="Wrong input.";
    }

    if (winner === 'computer') {
      countCompWins++
      scorePara.textContent = `Score: Player: ${countPlayWins} Computer: ${countCompWins}`;

    } else if (winner === 'player') {
      countPlayWins ++;
      scorePara.textContent = `Score: Player: ${countPlayWins} Computer: ${countCompWins}`;
    }
    if (countCompWins === 5 && countCompWins > countPlayWins) {
      finalResultPara.textContent = "The computer wins the game!";
      container.removeChild(para);
      container.removeChild(smallDiv);
    } else if (countPlayWins === 5 && countPlayWins > countCompWins) {
      finalResultPara.textContent = "The player wins the game!";
      container.removeChild(para);
      container.removeChild(smallDiv);
    }
}

const bigDiv = document.createElement('div');
document.body.appendChild(bigDiv);
const container = document.querySelector('#container');
const mainHeader = document.createElement('h2');
mainHeader.textContent = "Rock paper scissors game";
container.appendChild(mainHeader);
const para = document.createElement('p');
container.appendChild(para);
para.textContent = "Click on your choice:";
const smallDiv = document.createElement('div');
container.appendChild(smallDiv);

const btnRock = document.createElement('button');
btnRock.textContent = "Rock";
const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";
const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors";


smallDiv.appendChild(btnRock);
smallDiv.appendChild(btnPaper);
smallDiv.appendChild(btnScissors);


let countCompWins = 0;
let countPlayWins = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));



const computerPara = document.createElement('p');
bigDiv.appendChild(computerPara);
const playerPara = document.createElement('p');
bigDiv.appendChild(playerPara);
const resultPara = document.createElement('p');
bigDiv.appendChild(resultPara);
const scorePara = document.createElement('p');
bigDiv.appendChild(scorePara);
const finalResultPara = document.createElement('p');
bigDiv.appendChild(finalResultPara);
