import RacingGame from './RacingGame.js';
class App {
  async run() {
    await this.racingGame.newRacingGame();
    
  }
  constructor() {
    this.racingGame = new RacingGame();
  }

  
}

export default App;
