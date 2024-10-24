import RacingGameManager from './RacingGameManager.js';

class App {
  async run() {
    const game = new RacingGameManager();
    await game.playGame();
  }
}

export default App;
