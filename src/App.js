import RacingGame from './RacingGame.js';

class App {
  async run() {
    try {
      const racingGame = new RacingGame();
      await racingGame.play();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
