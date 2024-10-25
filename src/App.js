import { Console } from '@woowacourse/mission-utils';
import { QUERIES } from './constants.js';
import RacingGame from './RacingGame.js';

class App {
  async run() {
    const inputString = await Console.readLineAsync(QUERIES.CAR_NAMES);
    const carNames = inputString.split(",").map((carName) => carName.trim());

    const race = new RacingGame(carNames);
  }
}

export default App;
