import { Random } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from './constant.js';
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
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_CAR_NAME_LENGTH_ERROR));
    }

    if (name.length > Car.MAX_CAR_NAME_LENGTH) {
      throw new Error(errorString(CONSOLE_MESSAGE.MAX_CAR_NAME_LENGTH_ERROR));
    }
  }

  move() {
    const canMove = Random.pickNumberInRange(0, 9) >= 4;

    if (canMove) {
      this.#position += 1;
    }
  }
}

export default Car;
