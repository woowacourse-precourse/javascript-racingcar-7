import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from './constant/index.js';

class App {
  async run() {
    const cars = await this.setCars();
  }

  async setCars() {
    const input = await Console.readLineAsync(GAME_MESSAGE.INTRO);
    const carsArr = input.split(',');

    if (carsArr.some((name) => name === '')) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY);
    }

    if (carsArr.some((name) => name.split('').find((char) => char === ' '))) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP);
    }

    if (carsArr.length !== new Set(carsArr).size) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION);
    }

    if (carsArr.some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE);
    }

    return carsArr;
  }
}

export default App;
