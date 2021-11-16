class Game {
  constructor(type) {
    this.type = type;
    this.player = new Player('Human', '🙎🏾‍♀️');
    this.computer = new Player('Computer', '🖥');
    this.winner = "";
    this.classicChoices = ['book', 'ball', 'wand'];
    this.difficultChoices = ['book', 'ball', 'wand', 'broom', 'hat'];
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

  checkWinner() {
    this.player.takeTurn(this.type, this.player.choice);
    this.computer.takeTurn(this.type);
    var playerChoice = this.player.choice;
    var computerChoice = this.computer.choice;
    console.log(computerChoice);
    console.log(this.type);
    this.player.wins = this.player.retrieveWinsFromStorage() || 0;
    this.computer.wins = this.computer.retrieveWinsFromStorage() || 0;
    if (playerChoice === 'book' && (computerChoice === 'wand' || computerChoice === 'broom')) {
      console.log(playerInput)
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      console.log('book', this.winner);
      console.log('Wingardium Leviosa!')
      return true;
    } else if (playerChoice === 'ball' && (computerChoice === 'book' || computerChoice === 'broom')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      console.log(this.winner);
      console.log('Petrificus Totalus!');
      return true;
      console.log('ball', this.winner)
    } else if (playerChoice === 'wand' && (computerChoice === 'ball' || computerChoice === 'hat')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      console.log('wand', this.winner);
      console.log('Expecto Patronum!');
      return true;
    } else if (playerChoice === 'hat' && (computerChoice === 'book' || computerChoice === 'ball')){
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      console.log('ball', this.winner);
      console.log('Expelliarmus!');
      return true;
    } else if (playerChoice === 'broom' && (computerChoice === 'hat' || computerChoice === 'wand')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      console.log('broom', this.winner);
      console.log('Expecto Patronum!');
      return true;
    } else if (playerChoice === computerChoice) {
      console.log('Are you a witch or not?');
      console.log(playerChoice);
      console.log(computerChoice);
      return true;
    } else {
      this.winner = this.computer.name;
      this.computer.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      console.log(this.winner);
      console.log('Avada Kadavra!');
      return false;
   }
 }

  setScore() {
    this.player.wins = this.player.retrieveWinsFromStorage() || 0;
    this.computer.wins = this.computer.retrieveWinsFromStorage() || 0;
    humanWinCount.innerText =  `${this.player.wins}`;
    compWinCount.innerText = `${this.computer.wins}`;
  }
}
