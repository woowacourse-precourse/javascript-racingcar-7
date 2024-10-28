import Controller from '../src/controllers/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.run();
  }
}

export default App;
