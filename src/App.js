import RacingGame from './game/Game.js';

class App {
  async run() {
    const racingGame = new RacingGame();
    await racingGame.start();
  }
}

export default App;
