import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, FORWARD_DASH, SYSTEM_MESSAGE } from './constants.js';
import {
  invalidCharacter,
  invalidDuplicate,
  invalidInteger,
  invalidLength,
  invalidNumber,
  invalidRange,
} from './validators.js';

class App {
  async run() {
    await this.enterInput();

    Console.print(SYSTEM_MESSAGE.RESULT);
    this.carsMoveForward();
    this.printWinner();
  }

  async enterInput() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    this.namesArray = namesString.split(',');
    this.validateCarName(this.namesArray);

    this.carsForward = this.namesArray.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {});

    this.count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);
    this.validateCount(this.count);
  }

  carsMoveForward() {
    for (let i = 0; i < this.count; i++) {
      this.namesArray.forEach(element => {
        if (Random.pickNumberInRange(0, 9) >= 4) this.carsForward[element] += 1;

        Console.print(`${element} : ${FORWARD_DASH.repeat(this.carsForward[element])}`);
      });

      Console.print('');
    }
  }

  printWinner() {
    const winners = Object.keys(this.carsForward).filter(
      key => this.carsForward[key] === Math.max(...Object.values(this.carsForward)),
    );

    Console.print(`${SYSTEM_MESSAGE.WINNER}${winners.join(', ')}`);
  }

  validateCarName(namesArray) {
    if (invalidCharacter(namesArray)) throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    if (invalidLength(namesArray)) throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    if (invalidDuplicate(namesArray)) throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE);
  }

  validateCount(count) {
    if (invalidNumber(count)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    if (invalidRange(count)) throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    if (invalidInteger(count)) throw new Error(ERROR_MESSAGE.INVALID_INTEGER);
  }
}

export default App;
