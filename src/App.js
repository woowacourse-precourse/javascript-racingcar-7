import GameController from './controllers/GameController.js';

class App {
  async run() {
    const gameController = new GameController();
    await gameController.startGame();
  }
}

export default App;
