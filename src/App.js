import RacingGameController from "./controllers/RacingGameController.js";

class App {
  async run() {
    const controller = new RacingGameController();
    await controller.run();
  }
}

export default App;
