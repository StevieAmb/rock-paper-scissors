class Game {
  constructor(type) {
    this.type = type;
    this.player = new Player('human', '🙎🏾‍♀️');
    this.computer = new Player('computer', '🖥');
    this.winner = "";
  }

// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

  playGame() {

  }

  setGameType(type) {
    this.type = type;
    this.computer.chooseRandomFighter(type)
  }

  checkWinner() {
    var playerChoice = this.player.choice;
    var computerChoice = this.computer.choice;
    if (playerChoice === 'book' && computerChoice === 'broom')
      this.player.wins++;
      this.winner = this.player.name;
  }

  updateWinText() {
    chooseYourGameTitleLine.innerText = `${this.winner}`
    //you also need to display chosen icons (inner HTML);
    //this.player.choice
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
