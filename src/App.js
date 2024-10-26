import GameController from './controller/gameController.js';

class App {
  async run() {
    const gameController = new GameController();
    await gameController.start();
  }
}

export default App;
