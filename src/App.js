import GameController from './controllers/GameController.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    try {
      await GameController.play();
    } catch (error) {
      OutputView.printError(error);
      throw error;
    }
  }
}

export default App;
