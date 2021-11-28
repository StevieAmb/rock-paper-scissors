//buttons: choose game type
var changeGameButton = document.getElementById('changeGame');
var classicGamePlayButton = document.getElementById('classicGameButton');
var difficultGamePlayButton = document.getElementById('difficultGameButton');
//buttons: classic
var bookFighterButton = document.getElementById('book');
var crystalBallFighterButton = document.getElementById('ball');
var wandFighterButton = document.getElementById('wand')
//buttons: difficult
var broomFighterButton = document.getElementById('broom');
var hatFighterButton = document.getElementById('hat');
//sections
var playersChosenFighters = document.getElementById('showChosenFighter');
var allFighterIconsSection = document.getElementById('allIconsContainer');
var humanWinCount = document.getElementById('humanWinCount');
var compWinCount = document.getElementById('compWinCount');
var chooseYourGameTitleLine = document.getElementById('chooseYourGame');

//object instance
var newGame = new Game();

//eventListeners

const play = (event) => {
  newGame.player.choice = event.target.id;
  newGame.checkWinner();
  updateWinText();
  hide([allFighterIconsSection]);
  showChosenIcons();
  setTimeout(resetGame, 2000);
  newGame.setScore();
}

const resetGame = () => {
  if (newGame.type === 'Classic') {
    show([allFighterIconsSection]);
    hide([playersChosenFighters]);
    chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
  } else if (newGame.type === 'Difficult') {
   startDifficultGame();
   hide([playersChosenFighters]);
  }
}

const startClassicGame = () => {
  show([changeGameButton, allFighterIconsSection]);
  hide([classicGamePlayButton, difficultGameButton, broomFighterButton, hatFighterButton]);
  newGame.type = 'Classic';
  chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
}

const startDifficultGame = () => {
  newGame.type = 'Difficult'
  show([changeGameButton, allFighterIconsSection, broomFighterButton, hatFighterButton]);
  hide([classicGamePlayButton, difficultGameButton]);
  chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
}
const showChosenIcons = () => {
  show([playersChosenFighters]);
  playersChosenFighters.innerHTML =
  `<img class="player-icon-size human-chosen-icon-border" src="./assets/magic-${newGame.player.choice}.png">
  <img class="player-icon-size comp-chosen-icon-border" src="./assets/magic-${newGame.computer.choice}.png">`
}

const updateWinCount = () => {
  humanWinCount.innerText = newGame.player.retrieveWinsFromStorage() || 0;
  compWinCount.innerText = newGame.computer.retrieveWinsFromStorage() || 0;
}

const updateWinText = () => {
  if (newGame.winner === 'Human' || newGame.winner === 'Computer') {
    chooseYourGameTitleLine.innerText = `${newGame.winner} wins!`
  } else {
    chooseYourGameTitleLine.innerText = `It's a draw!`
  }
}

const changeGame = () => {
  show([classicGamePlayButton, difficultGamePlayButton]);
  hide([changeGameButton, allFighterIconsSection, playersChosenFighters]);
  chooseYourGameTitleLine.innerText = "Choose Your Game!";
}

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}

window.addEventListener('onload', updateWinCount());
allFighterIconsSection.addEventListener('click', function(event) {
  play(event);
});
classicGamePlayButton.addEventListener('click', startClassicGame);
difficultGamePlayButton.addEventListener('click', startDifficultGame);
changeGameButton.addEventListener('click', changeGame);
