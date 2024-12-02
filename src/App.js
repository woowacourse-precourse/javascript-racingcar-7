import GameController from './controllers/GameController.js';

class App {
  async run() {
    const game = new GameController();
    game.start();
  }
}

export default App;
