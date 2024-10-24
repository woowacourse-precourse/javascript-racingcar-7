import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';
import MovingCar from "./MovingCar.js";
import Car from './Car.js'

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.movingCar = new MovingCar();
  }

  async run() {
    try {
      const carNames = await this.inputHandler.carNamesInput();
      const countNum = await this.inputHandler.countNumInput();
      const cars = this.createCars(carNames, countNum);
      this.movingCar.startRace(cars, countNum);
    } catch (error) {
      this.outputHandler.printError(error);
    }
  }
  createCars(carNames, countNum) {
    return carNames.map(name => new Car(name, countNum));
  }
}

export default App;