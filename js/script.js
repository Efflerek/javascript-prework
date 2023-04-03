
 // Lottery - variable randomNumber
 var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana Liczba to: ' + randomNumber);
printMessage('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 
else if (randomNumber =='2') {
  computerMove="papier";
}
else if (randomNumber=='3') {
    computerMove="nożyce";
}
else {
  computerMove = 'nieznany ruch';
}
printMessage('Ruch komputera: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove =  'nożyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Ruch Gracza: ' + playerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
/**
 * Describe function argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput
 */

function getMoveName(argMoveId) {
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}
  
  function displayResult(argPlayerMove, argComputerMove) {
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove){
      printMessage('Remis!');    
    } else {
      printMessage('Przegrywasz! :(');
    }
  
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);