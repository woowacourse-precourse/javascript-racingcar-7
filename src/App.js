import { Console, Random } from '@woowacourse/mission-utils';

import { PRINT_MESSAGE } from './constants.js';
import { validateCarNamesInput } from './validator.js';

class App {
  async run() {
    const carNamesInput = await this.getCarNamesInput();
    validateCarNamesInput(carNamesInput);
    const moveAttemptCountInput = await this.getMoveAttemptCount();

    const carsData = this.changeCarNamesInputToCarsData(carNamesInput);

    this.printExecutionResultMessage();

    for (let i = 0; i < Number(moveAttemptCountInput); i++) {
      carsData.forEach((car) => {
        this.moveForward(car);
        this.printRoundResult(car);
      });

      Console.print('');
    }

    const winners = this.getWinners(carsData);
    this.printWinners(winners);
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

  printRoundResult(car) {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  }

  printWinners(winners) {
    Console.print(`${PRINT_MESSAGE.WINNERS}${winners.join(', ')}`);
  }

  moveForward(car) {
    if (this.canMoveForward()) {
      car.position += 1;
    }
  }

  getWinners(carsData) {
    const winnersPosition = Math.max(...carsData.map((car) => car.position));

    return carsData
      .filter((car) => winnersPosition === car.position)
      .map((car) => car.name);
  }
}

export default App;
