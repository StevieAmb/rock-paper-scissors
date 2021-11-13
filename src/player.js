class Player {
  constructor(name, image) {
    this.name = name;
    this.emoji = image;
    this.choice = "";
    this.wins = 0;
  }

  saveWinsToStorage() {
   this.wins++;
   //JSON.stringify
   //save to localStorage;
  }

  retrieveWinsFromStorage() {
    localStorage.getItem();
  }

  chooseRandomFighter(gameTypeChoicesArray) {
    var fighter =
    gameTypeChoicesArray[getRandomIndex(gameTypeChoicesArray)];
    this.choice = fighter;
    console.log(this.choice);
  }

  chooseFighter(event) {
    var chosenFighter = event.target.closest('button').id;
    console.log(event.target.closest('button').id);
    this.choice = chosenFighter;

  }

  takeTurn() {
    chooseFighter(event);
    chooseRandomFighter(difficultChoices);
    if(!this.choice) {
      this.choice = fighter;
    } else {
      this.choice = chosenFighter;
    }
  }
}

//there's game logic, and then there's playing the game
//to activate the game logic, each player has to take a take
//to take a turn, the human clicks the button
//the computer randomizes choices. So in an object instance
//of the computer, choices is choices[getRandomIndex(choices)]
//figure out how to get to my choices


//your player class has to be used to remake the the player sections
//of the comp. (so use innerHTML to put the character up)
function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
