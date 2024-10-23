import { getNameInput, getRoundCountInput } from './utils/inputHandler';
import Car from './models/Car';
import Race from './models/Race';

class App {
  async run() {
    try {
      const names = await getNameInput();
      const cars = names.map((name) => new Car(name));

      const roundCount = await getRoundCountInput();
      const race = new Race(cars, roundCount);

      race.start();
      race.printWinners();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
