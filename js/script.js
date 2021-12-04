let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień'
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce'
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/* if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}

if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Wygrywam!');
}

if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}

if(computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}

if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Wygrywam!');
}

if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}

if(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}

if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Wygrywam!');
}

if(playerMove == 'nieznany ruch'){
  printMessage('Tak sie nie bawię!');
}
