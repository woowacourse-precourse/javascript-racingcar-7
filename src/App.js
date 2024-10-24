import { Console } from '@woowacourse/mission-utils';

import { PRINT_MESSAGE } from './constants.js';

class App {
  async run() {
    const carNamesInput = await this.getCarNamesInput();
    const moveAttemptCountInput = await this.getMoveAttemptCount();
  }

  async getCarNamesInput() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.INPUT_CAR_NAMES);

    return input.replace(/ /g, '');
  }

  async getMoveAttemptCount() {
    const input = await Console.readLineAsync(
      PRINT_MESSAGE.INPUT_MOVE_ATTEMPT_COUNT,
    );

    return input.replace(/ /g, '');
  }
}

export default App;
