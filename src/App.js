import GameController from './GameController.js';
import CarModel from './CarModel.js';
import View from './View.js';

class App {
  async run() {
    const carModel = new CarModel();
    const view = new View();
    const gameController = new GameController(carModel, view);

    try {
      await gameController.startRace();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
