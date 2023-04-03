
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
  
playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);