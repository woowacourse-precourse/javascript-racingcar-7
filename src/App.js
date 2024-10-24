import RacingGameManager from './RacingGameManager.js';

class App {
  async run() {
    const game = new RacingGameManager();

    try {
      await game.playGame();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
