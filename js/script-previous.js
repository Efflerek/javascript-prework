/**
 * Buttons
 */

var buttonTest; buttonRock; buttonPaper; buttonScissors;
// tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty ');

  // Lottery - variable randomNumber
  var computerMove, randomNumber;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana Liczba to: ' + randomNumber);
  printMessage('Wylosowana liczba to: ' + randomNumber);
  if (randomNumber == '1') {
    computerMove = 'kamień';
  }
  else if (randomNumber == '2') {
    computerMove = "papier";
  }
  else if (randomNumber == '3') {
    computerMove = "nożyce";
  }
  else {
    computerMove = 'nieznany ruch';
  }
  printMessage('Ruch komputera: ' + computerMove);

  var playerMove;
  playerMove = argButtonName;
  console.log('Wpisana odpowiedź to: ' + argButtonName);
  if (playerInput == '1') {
    playerMove = 'kamień';
  }
  else if (playerInput == '2') {
    playerMove = 'papier';
  }
  else if (playerInput == '3') {
    playerMove = 'nożyce';
  } else {
    playerMove = 'nieznany ruch';
  }
  printMessage('Ruch Gracza: ' + playerMove);

  var computerMove, playerMove, randomNumber, playerInput;
  /**
   * argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput
   */

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


  console.log('Ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('Ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

  // tu znajdzie się cała dotychczasowa zawartość pliku js/script.js
  // czyli efekt ćwiczenia z poprzedniego submodułu
  // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
}

buttonTest.addEventListener('click', function () {
  buttonClicked('Test button')
});
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier')
});
buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)