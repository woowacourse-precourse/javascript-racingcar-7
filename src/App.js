import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';
import MovingCar from "./MovingCar.js";
import createCars from './CreateCar.js';

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
      const cars = createCars(carNames, countNum);
      this.movingCar.startRace(cars, countNum);
    } catch (error) {
      this.outputHandler.printError(error);
    }
  }
}

export default App;