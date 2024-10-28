import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constant.js';
import { errorString } from './util.js';

class Car {
  #name;
  #position;

  static MAX_CAR_NAME_LENGTH = 5;
  static PRINT_POSITION_FORM = '-';

  constructor(name) {
    this.#validateName(name);

    this.#name = name;
    this.#position = 0;
  }

  #validateName(name) {
    if (name.length === 0) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_CAR_NAME_LENGTH));
    }

    if (name.length > Car.MAX_CAR_NAME_LENGTH) {
      throw new Error(errorString(ERROR_MESSAGE.MAX_CAR_NAME_LENGTH));
    }
  }

  move() {
    const canMove = this.#isMove();

    if (canMove) {
      this.#position += 1;
    }
  }

  #isMove() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  printCarPosition() {
    Console.print(`${this.#name} : ${this.#switchPositionToDash()}`);
  }

  #switchPositionToDash() {
    return Car.PRINT_POSITION_FORM.repeat(this.#position);
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

Object.freeze(Car);

export default Car;
