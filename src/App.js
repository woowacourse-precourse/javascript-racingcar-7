import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';
import MovingCar from "./car/MovingCar.js";
import createCars from './car/CreateCar.js';
import RacingResult from './RacingResult.js';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.movingCar = new MovingCar();
    this.racingResult = new RacingResult();
  }

  async run() {
    try {
      const { carNames, countNum } = await this.inputHandler.getCarNamesAndCountNum();

      const cars = createCars(carNames, countNum);
      this.movingCar.startRace(cars, countNum);

      const winners = this.racingResult.findWinners(cars);
      this.outputHandler.printWinners(winners);

    } catch (error) {
      this.outputHandler.printError(error);
      throw error;
    }
  }
}

export default App;