import Car from './model/Car.js';
import InputView from './view/InputView.js';

class App {
  constructor() {
    this.carList = [];
    this.position = 0;
  }

  async run() {
    const carNames = await InputView.readCarName();
    this.createCars(carNames);
  }

  createCars(carNames) {
    this.carList = carNames.map((name) => new Car(name));
  }
}

export default App;
