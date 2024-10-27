import CarController from './controller/CarController';

class App {
  async run() {
    const carController = new CarController();
    await carController.init();
  }
}

export default App;
