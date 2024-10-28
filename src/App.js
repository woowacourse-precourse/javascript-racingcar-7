import { getCarNames, getRoundCount } from './services/input.js';
import Race from './models/Race.js';

class App {
  async run() {
    const carNames = await getCarNames();
    const roundCount = await getRoundCount();

    const race = new Race(carNames, roundCount);
    race.start();
    race.printWinner();
  }
}

export default App;
