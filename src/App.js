import { Console } from '@woowacourse/mission-utils';
import { QUERIES } from './constants.js';

class App {
  async run() {
    const inputString = await Console.readLineAsync(QUERIES.CAR_NAMES);
  }
}

export default App;
