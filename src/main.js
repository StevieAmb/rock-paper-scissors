//buttons: choose game type
var changeGameButton = document.getElementById('changeGame');
var classicGamePlayButton = document.getElementById('classicGameButton');
var difficultGamePlayButton = document.getElementById('difficultGameButton');
//buttons: classic
var bookFighterButton = document.getElementById('book');
var crystalBallFighterButton = document.getElementById('crystalBall');
var wandFighterButton = document.getElementById('wand')

var bookFighterButton = document.querySelector('.book');
var crystalBallFighterButton = document.querySelector('.crystalBall');
var wandFighterButton = document.querySelector('.wand')
//buttons: difficult
var broomFighterButton = document.getElementById('broom');
var hatFighterButton = document.getElementById('hat');
//sections
var playersChosenFighters = document.getElementById('showChosenFighter');
var allFighterIconsSection = document.getElementById('allIconsContainer');
var classicGameIconsSection = document.getElementById('classicGameIconsSection');
var difficultGameIconsSection = document.getElementById('diffGameIconsSelection');
var humanWinCount = document.getElementById('humanWinCount');
var compWinCount = document.getElementById('compWinCount');
var chooseYourGameTitleLine = document.getElementById('chooseYourGame');

//arrays && fighter choices
// var classicChoices = ['book', 'ball', 'wand'];
// var difficultChoices = ['book', 'crystalBall', 'wand', 'broom', 'hat'];

//object instance
var newGame = new Game();


//eventListeners
allFighterIconsSection.addEventListener('click', function(event){
play(event);
});
window.addEventListener('onload', newGame.setScore());
classicGameIconsSection.addEventListener('click', function(event) {
  play(event);
});
classicGamePlayButton.addEventListener('click', startClassicGame);
difficultGamePlayButton.addEventListener('click', startDifficultGame);
changeGameButton.addEventListener('click', changeGame);

function play(event) {
  console.log("play", event);
  newGame.player.takeTurn(event);
  newGame.computer.takeTurn(event);
  newGame.checkWinner();
  updateWinText();
  showChosenIcons();
  newGame.setScore();
  setTimeout(resetGame, 2000);
  //save wins to local storage
  //instantiate new game
  //retrieveWinsFromStorage
}

function resetGame() {
  show(classicGameIconsSection);
  hide(playersChosenFighters);
  var newGame = new Game();
}

function updateWinText() {
  if (newGame.winner === 'Human' || newGame.winner === 'Computer') {
  chooseYourGameTitleLine.innerText = `${newGame.winner} wins!`
} else {
  chooseYourGameTitleLine.innerText = `It's a draw!`
}
}

function showChosenIcons() {
  playersChosenFighters.innerHTML =
  `<img src="./assets/magic-${newGame.player.choice}.png">
  <img src="./assets/magic-${newGame.computer.choice}.png">`
  hide(classicGameIconsSection);
}

// function resetGame() {
//   show()
//   hide()
// }
   //save wins to localStorage (call playermethod)
   //set Timeout once win-text has been up for certain amount of time to reset game (that makes a new game instance) and resets the screen (in the main, because it's calling a new instance of the class when timer runs out)
   //call player method to retrieve wins and display them on side bar.
//4. Call different methods, all play their parts

// function showWinner() {
//   innertHTML =
// }


//functions
function chooseRuleType() {
  if (newGame.type === 'classic') {
    newGame.checkWinner();
  } else {
    newGame.checkWinnerDifficult();
  }
}


function startDifficultGame() {
 newGame.setGameType(newGame.difficultChoices);
 startClassicGame();
 show(difficultGameIconsSection);
}

function startClassicGame() {
  show(classicGameIconsSection);
  show(changeGameButton);
  hide(classicGamePlayButton);
  hide(difficultGameButton);
  chooseYourGameTitleLine.innerText = "Choose Your Fighter!";
}

function changeGame() {
  show(classicGamePlayButton);
  show(difficultGamePlayButton);
  hide(classicGameIconsSection);
  hide(difficultGameIconsSection);
  hide(changeGameButton);
  chooseYourGameTitleLine.innerText = "Choose Your Game!";
}


function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

// function getRandomIndex(array) {
//   console.log(array);
//    return Math.floor(Math.random() * array.length);
// }

//function hide(elements) {
  //for (var i = 0; i < elements.length; i++) {
  //  elements[i].classList.add('hidden');
//  }
//}
