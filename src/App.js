import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getMoveAttempts } from './utils/getInput.js';
import { startRace } from './Race.js';
import { printWinners } from './utils/Print.js';

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const moveAttempts = await getMoveAttempts();
      const raceResults = startRace(carNames, moveAttempts);
      printWinners(raceResults);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }
}

export default App;
