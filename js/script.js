/**
 * Buttons
 */

// declare and initialize button variables

const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
// assign elements found by ID to the button variables

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty ');


  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana Liczba to: ' + randomNumber);
  printMessage('Wylosowana liczba to: ' + randomNumber);
  // generate a random number and display it

  const computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera: ' + computerMove);
  // get the computer's move and display it

  const playerMove = argButtonName;
  printMessage('Ruch Gracza: ' + playerMove);
  // get the player's move and display it

  displayResult(playerMove, computerMove);
  // calculate and display the result of the game
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz! :(');
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonTest.addEventListener('click', function () {
  buttonClicked('Test button');
});
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce');
});
