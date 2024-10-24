import GameController from './controller/GameController.js';

class App {
  #controller;

  async run() {
    this.#controller = new GameController();

    await this.#controller.play();
  }
}

export default App;
