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

//arrays && fighter choices
// var classicChoices = ['book', 'ball', 'wand'];
// var difficultChoices = ['book', 'crystalBall', 'wand', 'broom', 'hat'];

//object instance
var newGame = new Game();

//eventListeners

//event Listeners for buttons
// bookFighterButton.addEventListener('click',);
// crystalBallFighterButton.addEventListener('click',);
// wandFighterButton.addEventListener('click',);
// //buttons: difficult
// broomFighterButton.addEventListener('click',);
// hatFighterButton.addEventListener('click',);


window.addEventListener('onload', updateWinCount());

allFighterIconsSection.addEventListener('click', function(event) {
  play(event);
});
classicGamePlayButton.addEventListener('click', startClassicGame);
difficultGamePlayButton.addEventListener('click', startDifficultGame);
changeGameButton.addEventListener('click', changeGame);

function play(event) {
  newGame.player.choice = event.target.id;
  console.log("play", event);
  newGame.checkWinner();
  updateWinText();
  hide([allFighterIconsSection]);
  showChosenIcons();
  setTimeout(resetGame, 2000);
  newGame.setScore();

  //save wins to local storage
  //instantiate new game
  //retrieveWinsFromStorage
}

function resetGame() {
  if (newGame.type === 'Classic') {
    show([allFighterIconsSection]);
    hide([playersChosenFighters]);
    chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
  } else if (newGame.type === 'Difficult') {
   startDifficultGame();
   hide([playersChosenFighters]);
  }
}

function startClassicGame() {
  show([changeGameButton, allFighterIconsSection]);
  hide([classicGamePlayButton, difficultGameButton, broomFighterButton, hatFighterButton]);
  newGame.type = 'Classic';
  chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
}

function startDifficultGame() {
  newGame.type = 'Difficult'
  show([changeGameButton, allFighterIconsSection]);
  hide([classicGamePlayButton, difficultGameButton]);
  chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
}
function showChosenIcons() {
  show(playersChosenFighters);
  playersChosenFighters.innerHTML =
  `<img class="player-icon-size" src="./assets/magic-${newGame.player.choice}.png">
  <img class="player-icon-size" src="./assets/magic-${newGame.computer.choice}.png">`
}

function updateWinCount() {
  humanWinCount.innerText = newGame.player.retrieveWinsFromStorage() || 0;
  compWinCount.innerText = newGame.computer.retrieveWinsFromStorage() || 0;
}
function updateWinText() {
  if (newGame.winner === 'Human' || newGame.winner === 'Computer') {
    chooseYourGameTitleLine.innerText = `${newGame.winner} wins!`
  } else {
    chooseYourGameTitleLine.innerText = `It's a draw!`
  }
}



function changeGame() {
  show([classicGamePlayButton, difficultGamePlayButton]);
  hide(changeGameButton);
  chooseYourGameTitleLine.innerText = "Choose Your Game!";
}


// function getRandomIndex(array) {
//   console.log(array);
//    return Math.floor(Math.random() * array.length);
// }
function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
   elements[i].classList.add('hidden');
 }
}
