import RacingGame from './RacingGame.js';
class App {
  async run() {
    const game = new RacingGame();
    await game.start();
  }
}

export default App;
