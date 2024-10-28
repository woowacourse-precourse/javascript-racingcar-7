import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorMessages, RandomConstant, NAME_MAX_LENGTH, NAME_MIN_LENGTH, HYPHEN } from './Constant.js';

class RacingCar {
  #name;
  #dist = 0;
  constructor(name) {
    this.#name = this.#validateName(name);
  }

  #validateName(name) {
    if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) throw new Error(ErrorMessages.INVALID_CAR_NAMES_ERROR);
    return name;
  }

  getDistance() {
    return this.#dist;
  }

  getName() {
    return this.#name;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(RandomConstant.MIN, RandomConstant.MAX) >= RandomConstant.THRESHOLD) this.#dist++;
  }

  result() {
    return `${this.#name} : ${HYPHEN.repeat(this.#dist)}`;
  }

}

export default RacingCar;