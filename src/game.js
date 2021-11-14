class Game {
  constructor(type) {
    this.type = type;
    this.player = new Player('human', '🙎🏾‍♀️');
    this.computer = new Player('computer', '🖥');
    this.winner = "";
    this.classicChoices = ['book', 'ball', 'wand'];
    this.difficultChoices = ['book', 'crystalBall', 'wand', 'broom', 'hat'];
  }

// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

  trackData() {

  }

  setGameType(type) {
    this.type = type;
  }



  // displayChosenIcon(playerChoice, compChoice) {
  //   img.src = ./
  //   img.src = ./assets/magic-${this.player.choice}.png
  // }

  showChosenIcon() {
    for (var i = 0; i < this.classicChoices.length; i++) {
      var iconId = this.classicChoices[i];
      var playerChoiceMatches = this.player.choice === iconId;
      var computerChoiceMatches = this.computer.choice === iconId;

      if(playerChoiceMatches || computerChoiceMatches) {
        var chosenButton = document.getElementById(iconId);
        chosenButton.classList.remove('hidden');
        console.log("if", chosenButton);
        chosenButton.disabled = true;

       if (playerChoiceMatches === computerChoiceMatches){
        var chosenButton = document.getElementById(iconId+"2");
        chosenButton.classList.remove('hidden');
        chosenButton.disabled = true;
      }
    } else {
        var chosenButton = document.getElementById(iconId);
        chosenButton.classList.add('hidden');
    }
  }
}

  checkWinner() {
    var playerChoice = this.player.choice;
    var computerChoice = this.computer.choice;
    if (playerChoice === 'book' && computerChoice === 'wand') {
      this.player.wins++;
      this.winner = this.player.name;
      console.log('Wingardium Leviosa!')
    } else if (playerChoice === 'ball' && computerChoice === 'book') {
      this.player.wins++;
      this.winner = this.player.name;
      console.log('Petrificus Totalus!');
    } else if (playerChoice === 'wand' && computerChoice === 'ball') {
      this.player.wins++;
      this.winner = this.player.name;
      console.log('Expecto Patronum!');
    } else if (playerChoice === computerChoice) {
      console.log('Are you a witch or not?');
      console.log(playerChoice);
      console.log(computerChoice);
    } else {
      this.winner = this.computer.name;
      this.computer.wins++;
      console.log('Avada Kadavra!');
   }
 }

  setScore() {
    humanWinCount.innerText =  `${this.player.wins}`;
    compWinCount.innerText = `${this.computer.wins}`;
  }

  updateWinText() {
    if (this.winner === 'human' || this.winner === 'computer') {
    chooseYourGameTitleLine.innerText = `${this.winner} wins!`
  } else (
    chooseYourGameTitleLine.innerText = `It's a draw!`
  )
  }
}


//Game Logic
//This could be an ELSE??? //if (this.player.choice === this.computer.choice) {
// update the innerText of Choose Your Game to equal "It's a Draw"
//this.player.wins
//this.computer.wins
//else if(this.player.choice === paper && this.computer.choice === rock) {
//this.player.wins++;
//update innerText to equal "Human wins!"
//else if(this.player.choice === rock && this.computer.choice === scissors) {
//this.player.wins++;
//update innerText to equal "Human wins!";
//} else if(this.player.choice === scissors && this.computer.choice === paper) {
//
