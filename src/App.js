import { Console, Random } from '@woowacourse/mission-utils';

import { PRINT_MESSAGE } from './constants.js';

class App {
  async run() {
    const carNamesInput = await this.getCarNamesInput();
    const moveAttemptCountInput = await this.getMoveAttemptCount();

    const carsData = this.changeCarNamesInputToCarsData(carNamesInput);

    this.printExecutionResultMessage();
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

  changeCarNamesInputToCarsData(carNamesInput) {
    const carNames = carNamesInput.split(',');

    return carNames.map((name) => ({ name, position: 0 }));
  }

  canMoveForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  printExecutionResultMessage() {
    Console.print(PRINT_MESSAGE.EXECUTION_RESULT);
  }
}

export default App;
