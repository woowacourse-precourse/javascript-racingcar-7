import { getNameInput, getRoundCountInput } from './utils/inputHandler';
import Car from './models/Car';
import printWinners from './utils/printWinners';
import runRaces from './utils/runRaces';

class App {
  async run() {
    try {
      const names = await getNameInput();
      const cars = names.map((name) => new Car(name));

      const roundCount = await getRoundCountInput();

      runRaces(cars, roundCount);
      printWinners(cars);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
