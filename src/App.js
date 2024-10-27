import CarRacingGameController from "./controller/CarRacingGameController.js";

class App {
  constructor() {
    this.controller = new CarRacingGameController();
  }
  async run() {
    await this.controller.setModelData();
  }
}

export default App;
