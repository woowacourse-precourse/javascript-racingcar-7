import { Console } from '@woowacourse/mission-utils';
import { getNameInput, getRoundCountInput } from './utils/inputHandler.js';
import Car from './models/Car.js';
import printWinners from './utils/printWinners.js';
import runRaces from './utils/runRaces.js';
import Validator from './validators/Validator.js';

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
