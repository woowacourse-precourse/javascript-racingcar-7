import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';
import MovingCar from "./car/MovingCar.js";
import createCars from './car/CreateCar.js';
import RaceResult from './RacingResult.js';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.movingCar = new MovingCar();
    this.raceResult = new RaceResult();
  }

  async run() {
    try {
      const { carNames, countNum } = await this.inputHandler.getCarNamesAndCountNum();

      const cars = createCars(carNames, countNum);
      this.movingCar.startRace(cars, countNum);

      const winners = this.raceResult.findWinners(cars);
      this.outputHandler.printWinners(winners);

    } catch (error) {
      this.outputHandler.printError(error);
      throw error;
    }
  }
}

export default App;