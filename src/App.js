import { getNameInput, getRoundCountInput } from './utils/inputHandler';
import Car from './models/Car';
import Race from './models/Race';
import WinnerCalculator from './models/WinnerCalculator';

class App {
  async run() {
    try {
      const names = await getNameInput();
      const cars = names.map((name) => new Car(name));

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
