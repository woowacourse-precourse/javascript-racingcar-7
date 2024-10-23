import { createCars } from './models/createCars.js';
import { getNameInput, getRoundCountInput } from './utils/inputHandler.js';
import Race from './models/Race.js';
import Validator from './validators/Validator.js';
import WinnerCalculator from './models/WinnerCalculator.js';

class App {
  async run() {
    try {
      const names = await getNameInput();
      Validator.checkNames(names);

      const cars = createCars(names);

      const roundCount = await getRoundCountInput();
      Validator.checkRoundCount(roundCount);

      const race = new Race(cars, roundCount);
      race.start();

      WinnerCalculator.printWinners(cars);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
