import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constant.js';
import { errorString } from './util.js';

class Car {
  #name;
  #position;

  static MAX_CAR_NAME_LENGTH = 5;

  constructor(name) {
    this.#validateName(name);

    this.#name = name;
    this.#position = 0;
  }

  #validateName(name) {
    if (name.trim().length === 0) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_CAR_NAME_LENGTH));
    }

    if (name.length > Car.MAX_CAR_NAME_LENGTH) {
      throw new Error(errorString(ERROR_MESSAGE.MAX_CAR_NAME_LENGTH));
    }
  }

  move() {
    const canMove = Random.pickNumberInRange(0, 9) >= 4;

    if (canMove) {
      this.#position += 1;
    }
  }

  printCarPosition() {
    Console.print(`${this.#name} : ${this.#switchPositionToDash()}`);
  }

  #switchPositionToDash() {
    return '-'.repeat(this.#position);
  }
}

export default Car;
