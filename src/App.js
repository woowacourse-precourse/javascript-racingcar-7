import GameController from './controllers/GameController.js';

class App {
  async run() {
    const controller = new GameController();
    await controller.run();
  }
}

export default App;
