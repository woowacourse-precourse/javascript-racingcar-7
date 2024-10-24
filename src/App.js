import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.startGame();
  }
}

const app = new App();
app.run();

export default App;
