import RacingGame from './RacingGame.js';
class App {
  async run() {}

  constructor() {
    this.racingGame = new RacingGame();
  }
  
  async run() {
    await this.racingGame.newRacingGame(); 
  }
  
}

export default App;
