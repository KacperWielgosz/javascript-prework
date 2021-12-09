{
const getMoveName = function (argMoveId){
  if (argMoveId == 1){
    return 'kamień'
  }
  else if (argMoveId == 2){
    return 'papier';
  }
  else if (argMoveId == 3){
    return 'nożyce'
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber),
    playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

const displayResult = function (argComputerMove, argPlayerMove){
  if ((argComputerMove === 'kamień' && argPlayerMove === 'papier')||
  (argComputerMove === 'papier' && argPlayerMove === 'nożyce')||
  (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')){
  return'Ty wygrywasz!';
  }
  else if ((argComputerMove === 'kamień' && argPlayerMove === 'kamień')||
  (argComputerMove === 'papier' && argPlayerMove === 'papier')||
  (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce')){
  return('Remis!');
  }
  else if((argComputerMove === 'kamień' && argPlayerMove === 'nożyce')||
  (argComputerMove === 'papier' && argPlayerMove === 'kamień')||
  (argComputerMove === 'nożyce' && argPlayerMove === 'papier')){
  return('Wygrywam!');
  }
  else if (argPlayerMove === 'nieznany ruch'){
    return('Tak sie nie bawię!');
  }
}

printMessage(displayResult(computerMove, playerMove))
}
