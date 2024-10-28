import Controller from "./controller/controller";

class App {
  #controller

  constructor() {
    this.#controller = new Controller();
  }

  async run() {
    await this.#controller.playRacingCar();
  }
}

export default App;
