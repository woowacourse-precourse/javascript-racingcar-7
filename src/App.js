import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './constants/index.js';

const CAR_NAME_MAX_LENGTH = 5;

class App {
  async run() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.entries);
    const carNames = this.#parseEntries(input);
  }

  #parseEntries(input) {
    const carNames = input.split(',');
    carNames.forEach(this.#validateCarName);
    return carNames;
  }

  #validateCarName(name) {
    if (name === '') {
      throw Error(ERROR_MESSAGE.carNameWhitespace);
    }

    if (name.length > CAR_NAME_MAX_LENGTH) {
      throw Error(ERROR_MESSAGE.carNameLength);
    }
  }
}

export default App;
