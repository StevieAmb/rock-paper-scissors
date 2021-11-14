//buttons
var bookFighterButton = document.getElementById('book');
var crystalBallFighterButton = document.getElementById('crystalBall');
var wandFighterButton = document.getElementById('wand');
var broomFighterButton = document.getElementById('broom');
var hatFighterButton = document.getElementById('hat');
var changeGameButton = document.getElementById('changeGame');
var classicGamePlayButton = document.getElementById('classicGameButton');
var difficultGamePlayButton = document.getElementById('difficultGameButton');
//sections
var classicGameIconsSection = document.getElementById('classicGameIconsSection');
var difficultGameIconsSection = document.getElementById('diffGameIconsSelection');
var humanWinCount = document.getElementById('humanWinCount');
var compWinCount = document.getElementById('compWinCount');
var chooseYourGameTitleLine = document.getElementById('chooseYourGame');

//arrays && fighter choices
var classicChoices = ['book', 'crystalBall', 'wand'];
var difficultChoices = ['book', 'crystalBall', 'wand', 'broom', 'hat'];

//object instance
var newGame = new Game();
console.log(newGame.player);

document.querySelector('.emoji').innerHTML =  newGame.player.emoji;

//eventListeners
difficultGameIconsSection.addEventListener('click', function(event){
play(event);
});
// window.addEventListener('onload')
classicGameIconsSection.addEventListener('click', function(event) {
  play(event);
});
classicGamePlayButton.addEventListener('click', startClassicGame);
difficultGamePlayButton.addEventListener('click', startDifficultGame);
changeGameButton.addEventListener('click', changeGame);

function play(event) {
  // newGame.computer.chooseRandomFighter(classicChoices);
  // newGame.player.chooseFighter(event);
  console.log("play", event)
  newGame.player.takeTurn(event);
  newGame.computer.takeTurn(event);
  newGame.checkWinner();

  //change icon view to player choices (innerHTML)
  //updateWinText
  //save wins to local storage
  //set the timeout function
  //instantiate new game
  //retrieveWinsFromStorage
}


//PSEUDOCODE
//activate the game logic when you click on a button (or section you have the
//buttons in. Then you would use event deleg to target specific spots of that
//by using target.event.id)
//game logic is dependent on choices made
//choices made is in the chooseFighter function.

//actions
//1. Go to page
    //call player method to retrieve wins and display them on side bar.
    //instantiate a new game
    //that new game instantiates the players
    //screen shows two buttons for game type
//2. Click on game difficulty
    //call a game method to update this.type
    //based on game type, display icons
    //based on game type, set computer fighter
//3. Click on icon
   //call player chooseFighter method
   //the other icons disappear
   //display game.player.choice & game.computer.choice
   //call game.checkWinner method, which decides from //the computer icon and player icon which one is //the winner
   //call game.updateWinText to show winner
   //save wins to localStorage (call playermethod)
   //set Timeout once win-text has been up for certain amount of time to reset game (that makes a new game instance) and resets the screen (in the main, because it's calling a new instance of the class when timer runs out)
   //call player method to retrieve wins and display them on side bar.
//4. Call different methods, all play their parts


//functions


function startDifficultGame() {
 newGame.setGameType(difficultChoices);
 startClassicGame();
 show(difficultGameIconsSection);
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

//function hide(elements) {
  //for (var i = 0; i < elements.length; i++) {
  //  elements[i].classList.add('hidden');
//  }
//}
