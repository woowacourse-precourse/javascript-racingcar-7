import { Console } from '@woowacourse/mission-utils';

/**
 *
 */
class IOProcessor {
  /**
   *
   */
  async processInput(message) {
    return Console.readLineAsync(message);
  }

  /**
   *
   */
  processOutput(result) {
    Console.print(result);
  }
}

export default IOProcessor;
