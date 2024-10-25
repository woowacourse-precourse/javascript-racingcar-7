import LacingController from './controller/LacingController.js';

class App {
  async run() {
    const controller = new LacingController();
    await controller.run();
  }
}

export default App;
