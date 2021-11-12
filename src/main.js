//buttons
var bookFighterButton = document.getElementById('bookButton');
var crystalBallFighterButton = document.getElementById('crystalBallButton');
var wandFighterButton = document.getElementById('wandButton');
var broomFighterButton = document.getElementById('broomButton');
var hatFighterButton = document.getElementById('hatButton');
var changeGameButton = document.getElementById('changeGame');
var classicGamePlayButton = document.getElementById('classicGameButton');
var difficultGamePlayButton = document.getElementById('difficultGameButton');
//sections
var classicGameIconsSection = document.getElementById('classicGameIconsSection');
var difficultGameIconsSection = document.getElementById('diffGameIconsSelection');
var humanWinCount = document.getElementById('humanWinCount');
var compWinCount = document.getElementById('compWinCount');
var chooseYourGameTitleLine = document.getElementById('chooseYourGame');

//arrays

//eventListeners
classicGamePlayButton.addEventListener('click', startClassicGame);
difficultGamePlayButton.addEventListener('click', startDifficultGame);
changeGameButton.addEventListener('click', changeGame);





//functions
function startDifficultGame() {
 startClassicGame();
 show(difficultGameIconsSection);
 chooseYourGameTitleLine.innerText = "Choose Your Fighter!";

}

function startClassicGame() {
  show(classicGameIconsSection);
  show(changeGameButton);
  hide(classicGamePlayButton);
  hide(difficultGamePlayButton);
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

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
