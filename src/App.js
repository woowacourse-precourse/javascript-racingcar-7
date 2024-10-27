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
    await this.enterCarNames();
    this.validateCarName(this.namesArray);
    this.createMoveForwardObject();

    await this.enterCount();
    this.validateCount(this.count);

    Console.print(SYSTEM_MESSAGE.RESULT);
    this.carsMoveForward();
    this.calculateWinner();
    this.printWinner();
  }

  async enterCarNames() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    this.namesArray = namesString.split(',');
  }

  createMoveForwardObject() {
    this.carsForward = this.namesArray.reduce((acc, car) => {
      acc[car] = 0;
      return acc;
    }, {});
  }

  async enterCount() {
    this.count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);
  }

  carsMoveForward() {
    for (let i = 0; i < this.count; i++) {
      Object.keys(this.carsForward).forEach(car => {
        if (Random.pickNumberInRange(0, 9) >= 4) this.carsForward[car] += 1;

        Console.print(`${car} : ${FORWARD_DASH.repeat(this.carsForward[car])}`);
      });

      Console.print(EMPTY_STRING);
    }
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
