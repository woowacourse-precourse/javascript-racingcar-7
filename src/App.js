import { getCarNames, getMoveCount } from './input.js';
import { initializeCars } from './car.js';
import { play, getWinners } from './race.js';
import { displayWinners } from './output.js';

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const counts = await getMoveCount();

      const cars = initializeCars(carNames);
      play(cars, counts);

      const winners = getWinners(cars);
      displayWinners(winners);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
