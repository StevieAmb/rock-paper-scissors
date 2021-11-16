class Player {
  constructor(name, image) {
    this.name = name;
    this.emoji = image;
    this.choice = "";
    this.wins = this.wins || 0;

  }

  saveWinsToStorage() {
    if (this.name === 'Human') {
      localStorage.setItem('humanWins', JSON.stringify(this.wins));
    } else {
      localStorage.setItem('compWins', JSON.stringify(this.wins));
    }
  }

  retrieveWinsFromStorage() {
    var parsedWin = "";
    if (this.name === 'Human') {
    parsedWin = JSON.parse(localStorage.getItem('humanWins'));
    } else {
    parsedWin = JSON.parse(localStorage.getItem('compWins'));
    }
    return parsedWin;
  }


  setTimeout() {
    show(classicGameIconsSection)
  }

  takeTurn(type, playerInput) {
      if (playerInput) {
      this.choice = playerInput;
    } else if (type === 'Classic') {
      var classicChoices = ['book', 'ball', 'wand'];
      this.choice =
      classicChoices[getRandomIndex(classicChoices)];
    } else if (type === 'Difficult') {
      var difficultChoices = ['book', 'ball', 'wand', 'broom', 'hat'];
      this.choice = difficultChoices[getRandomIndex(difficultChoices)];
      console.log('computer fighter', this.choice);
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
