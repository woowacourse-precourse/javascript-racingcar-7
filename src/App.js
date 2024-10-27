import { Console, Random } from '@woowacourse/mission-utils';
import { EMPTY_STRING, ERROR_MESSAGE, FORWARD_DASH, SYSTEM_MESSAGE } from './constants.js';
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
    const namesArray = await this.enterCarNames();
    this.validateCarName(namesArray);
    this.createMoveForwardObject(namesArray);

    const count = await this.enterCount();
    this.validateCount(count);

    Console.print(SYSTEM_MESSAGE.RESULT);
    for (let i = 0; i < count; i++) {
      this.carsMoveForward();
      this.printCurrentStatus();
    }

    this.calculateWinner();
    this.printWinner();
  }

  async enterCarNames() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    return namesString.split(',');
  }

  createMoveForwardObject(namesArray) {
    this.carsForward = namesArray.reduce((acc, car) => {
      acc[car] = 0;
      return acc;
    }, {});
  }

  async enterCount() {
    const count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);
    return count;
  }

  carsMoveForward() {
    Object.keys(this.carsForward).forEach(car => {
      if (Random.pickNumberInRange(0, 9) >= 4) this.carsForward[car] += 1;
    });
  }

  printCurrentStatus() {
    Object.keys(this.carsForward).forEach(car => {
      Console.print(`${car} : ${FORWARD_DASH.repeat(this.carsForward[car])}`);
    });

    Console.print(EMPTY_STRING);
  }

  calculateWinner() {
    const maxForward = Math.max(...Object.values(this.carsForward));

    this.winners = Object.keys(this.carsForward).filter(
      car => this.carsForward[car] === maxForward,
    );
  }

  printWinner() {
    Console.print(`${SYSTEM_MESSAGE.WINNER} ${this.winners.join(', ')}`);
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
