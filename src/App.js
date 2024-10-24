import Controller from './Controller.js';

class App {
  async run() {
    try {
      const controller = new Controller();
      await controller.control();
    } catch (e) {
      throw Error(e);
    }
  }
}

export default App;
