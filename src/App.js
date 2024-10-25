import RacingController from './controller/racingController.js';

class App {
  constructor() {
    this.controller = new RacingController();
  }

  async run() {
    await this.controller.getCarNames();
  }
}

export default App;
