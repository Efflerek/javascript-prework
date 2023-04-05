

/**
 * Buttons
 */
var argButtonName, buttonTest; buttonRock; buttonPaper; buttonScissors;
buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}

 // Lottery - variable randomNumber
 var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana Liczba to: ' + randomNumber);
printMessage('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 
else if (randomNumber =='2') {
  computerMove='papier';
}
else if (randomNumber=='3') {
    computerMove='nożyce';
}
else {
  computerMove = 'nieznany ruch';
}
printMessage('Ruch komputera: ' + computerMove);

var playerMove;
playerMove=argButtonName;
console.log('Wybrany ruch to: ' + argButtonName);
if (argButtonName == 'kamień') {
  playerMove = 'kamień';
}
else if (argButtonName == 'papier') {
    playerMove = 'papier';
}
else if (argButtonName == 'nożyce') {
    playerMove =  'nożyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Ruch Gracza: ' + playerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
/**
 * argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput
 */

function getMoveName(argMoveId) {
    if(argMoveId == kamień){
        return 'kamień';
    } else if (argMoveId == papier){
        return 'papier';
    } else if (argMoveId == nożyce){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}
  
  function displayResult(PlayerMove, ComputerMove) {
    if(PlayerMove == 'papier' && ComputerMove == 'kamień'){
      printMessage('Wygrywasz!');
    } else if (PlayerMove == 'kamień' && ComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    } else if (PlayerMove == 'nożyce' && ComputerMove == 'papier'){
      printMessage('Wygrywasz!');
    } else if (PlayerMove == ComputerMove){
      printMessage('Remis!');    
    } else {
      printMessage('Przegrywasz! :(');
    }
  
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  }

playerMove = argButtonName;
console.log('Ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

buttonTest.addEventListener('click', function(){ buttonClicked('test'); });
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });