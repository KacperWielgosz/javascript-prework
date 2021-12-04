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

let playerMove = getMoveName(playerInput);

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

printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return('Ty wygrywasz!');
  }

  else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    return('Remis!');
  }

  else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return('Wygrywam!');
  }

  else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return('Ty wygrywasz!');
  }

  else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    return('Remis!');
  }

  else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return('Wygrywam!');
  }

  else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return('Ty wygrywasz!');
  }

  else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    return('Remis!');
  }

  else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    return('Wygrywam!');
  }

  else if(argPlayerMove == 'nieznany ruch'){
    return('Tak sie nie bawię!');
  }
}

  printMessage(displayResult)
