class Game {
  constructor(type) {
    this.type = type;
    this.player = new Player('Human', '🙎🏾‍♀️');
    this.computer = new Player('Computer', '🖥');
    this.winner = "";
    this.classicChoices = ['book', 'ball', 'wand'];
    this.difficultChoices = ['book', 'ball', 'wand', 'broom', 'hat'];
  }

  setGameType(type) {
    this.type = type;
  }

  checkWinner() {
    this.player.takeTurn(this.type, this.player.choice);
    this.computer.takeTurn(this.type);
    var playerChoice = this.player.choice;
    var computerChoice = this.computer.choice;
    this.player.wins = this.player.retrieveWinsFromStorage() || 0;
    this.computer.wins = this.computer.retrieveWinsFromStorage() || 0;
    if (playerChoice === 'book' && (computerChoice === 'wand' || computerChoice === 'broom')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      return true;
    } else if (playerChoice === 'ball' && (computerChoice === 'book' || computerChoice === 'broom')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      return true;
    } else if (playerChoice === 'wand' && (computerChoice === 'ball' || computerChoice === 'hat')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      return true;
    } else if (playerChoice === 'hat' && (computerChoice === 'book' || computerChoice === 'ball')){
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      return true;
    } else if (playerChoice === 'broom' && (computerChoice === 'hat' || computerChoice === 'wand')) {
      this.player.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
      this.winner = this.player.name;
      return true;
    } else if (playerChoice === computerChoice) {
      this.winner = "";
      return true;
    } else {
      this.winner = this.computer.name;
      this.computer.wins++;
      this.player.saveWinsToStorage();
      this.computer.saveWinsToStorage();
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
