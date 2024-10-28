import CarRacingController from "./controller/CarRacingController.js";

class App {
  async run() {
    const controller = new CarRacingController();
    await controller.startGame();
  }
}

export default App;
