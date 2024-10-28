import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM_MOVE_RULE } from '../constants/Rule.js';
import CarNameValidator from './validation/CarNameValidator.js';

export default class Car {
  #carName;
  #moveCount;

  constructor (carName) {
    CarNameValidator.validateCarNameLength(carName);
    this.#carName = carName;
    this.#moveCount = 0;
  }

  moveCar () {
    return this.#moveCount += 1;
  }

  getCarName () {
    return this.#carName;
  }

  getMoveCount () {
    return this.#moveCount;
  }
}

export class RacingCar extends Car {
  moveCar () {
    if (RacingCar.#canMove()) {
      return super.moveCar();
    }
    return this.getMoveCount();
  }

  static #canMove () {
    const randomNumber = RacingCar.#generateRandomNumber();
    return randomNumber >= RANDOM_MOVE_RULE.MOVE_CONDITION;
  }

  static #generateRandomNumber () {
    return MissionUtils.Random.pickNumberInRange(RANDOM_MOVE_RULE.MIN, RANDOM_MOVE_RULE.MAX);
  }
}
