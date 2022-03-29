function playgame(playerInput){
  clearMessages();

  const rock = 'kamień';
  const paper = 'papier';
  const scisors = 'nożyce';
  const unnknown = 'nieznany ruch';
  const win = 'ty wygyrywasz!';
  const draw = 'remis!';
  const loose = 'ja wygyrywam!';
  const yourMove = 'Twój ruch to: ';
  const iPlayed = 'Zagrałem ';
  const youPlayed = ', a Ty ';
  const wrongMove = 'Nie znam ruchu o id ';
  const incorect = 'Tak sie nie bawię!';
  const dot = '.';
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function (argMoveId) {
    if (argMoveId == 1) {
      return rock;
    } else if (argMoveId == 2) {
      return paper;
    } else if (argMoveId == 3) {
      return scisors;
    }
    printMessage(wrongMove + argMoveId + dot);
    return unnknown;
  };

  displayResult = function (argComputerMove, argPlayerMove){
    if (
      (argComputerMove === rock && argPlayerMove === paper)
      || (argComputerMove === paper && argPlayerMove === scisors)
      || (argComputerMove === scisors && argPlayerMove === rock)
    ) {
      return win;
    } else if (
      (argComputerMove === rock && argPlayerMove === rock)
      || (argComputerMove === paper && argPlayerMove === paper)
      || (argComputerMove === scisors && argPlayerMove === scisors)
    ) {
      return draw;
    } else if (
      (argComputerMove === rock && argPlayerMove === scisors)
      || (argComputerMove === paper && argPlayerMove === rock)
      || (argComputerMove === scisors && argPlayerMove === paper)
    ) {
      return loose;
    }
    return incorect;
  };

  const computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);

  printMessage(yourMove + playerMove);
  printMessage(iPlayed + computerMove + youPlayed + playerMove);
  printMessage(displayResult(computerMove, playerMove))
}

document.getElementById('rock').addEventListener('click', function(){
  playgame(1)
})
document.getElementById('paper').addEventListener('click', function(){
  playgame(2)
})
document.getElementById('scissors').addEventListener('click', function(){
  playgame(3)
})
