import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants.js';

/**
 *
 */
class IOProcessor {
  /**
   *
   */
  async processInput() {
    const { INPUT_CARS, INPUT_COUNT } = INPUT_MESSAGE;
    const cars = await Console.readLineAsync(INPUT_CARS);
    const count = await Console.readLineAsync(INPUT_COUNT);
    return { cars, count };
  }

  /**
   *
   */
  processOutput(result) {
    Console.print(result);
  }
}

export default IOProcessor;
