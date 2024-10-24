import GameController from './GameController.js';

class App {
  #controller;

  async run() {
    this.#controller = new GameController();

    await this.#controller.init();
    this.#controller.execute();
    this.#controller.result();
  }
}

export default App;
