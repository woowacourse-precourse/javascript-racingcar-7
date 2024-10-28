import RaceGame from './RaceGame.js';

class App {
  async run() {
    const game = new RaceGame();
    await game.ready();
  }
}

export default App;
