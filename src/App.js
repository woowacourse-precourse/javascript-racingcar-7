import Controller from './Controller.js';

class App {
  async run() {
    await new Controller().play();
  }
}

export default App;
