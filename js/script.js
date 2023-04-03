// wywołanie funkcji printMessage i użycie zmiennej
var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '!Jeśli Twój ruch to papier, to wygrywasz!');
 var playerMove;
 playerMove = 'papier';
 printMessage('Zagrałem ' + playerMove + 'Jeśli Twój ruch to nożyce, to wygrywasz');

 // Losowanie - zmienna randomNumber
 var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
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
printMessage('Mój ruch: ' + computerMove);
