import Controller from './controllers/controller';

class App {
  async run() {
    const controller = new Controller();
    await controller.run();
  }
}

export default App;
