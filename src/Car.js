import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  #name;

  #moveCnt;

  constructor(name) {
    if (!Car.validateCarName(name)) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다');
    }
    this.#name = name;
    this.#moveCnt = 0;
  }

  get name() {
    return this.#name;
  }

  get moveCnt() {
    return this.#moveCnt;
  }

  tryMoveForward() {
    if (Car.canMoveForward()) {
      this.#moveCnt += 1;
      return true;
    }
    return false;
  }

  static validateCarName(name) {
    return name.length <= 5;
  }

  static canMoveForward() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      return true;
    }
    return false;
  }
}

export default Car;
