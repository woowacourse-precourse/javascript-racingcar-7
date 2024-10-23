import { createCars } from './models/createCars.js';
import {
  getValidateNameInput,
  getValidateRoundCountInput,
} from './utils/inputHandler.js';
import Race from './models/Race.js';
import WinnerCalculator from './models/WinnerCalculator.js';

class App {
  async run() {
    try {
      const names = await getValidateNameInput();
      const cars = createCars(names);

      const roundCount = await getValidateRoundCountInput();

      const race = new Race(cars, roundCount);
      race.start();

      WinnerCalculator.printWinners(cars);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
