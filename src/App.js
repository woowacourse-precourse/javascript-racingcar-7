import Controller from './Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.control();
  }
}

export default App;
