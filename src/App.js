import CarRacingController from "./controller/CarRacingController.js";

class App {
  #controller;

  async run() {
    this.#controller = new CarRacingController();
    await this.#controller.play();
  }
}

export default App;
