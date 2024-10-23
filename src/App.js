import { createCars } from './utils/createCars';
import { getNameInput, getRoundCountInput } from './utils/inputHandler';
import Race from './models/Race';
import WinnerCalculator from './models/WinnerCalculator';

class App {
  async run() {
    try {
      const names = await getNameInput();
      const cars = createCars(names);

      const roundCount = await getRoundCountInput();

      const race = new Race(cars, roundCount);
      race.start();

      WinnerCalculator.printWinners(cars);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
