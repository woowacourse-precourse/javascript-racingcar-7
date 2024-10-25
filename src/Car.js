import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  #name;

  constructor(name) {
    if (!Car.validateCarName(name)) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다');
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  static validateCarName(name) {
    return name.length <= 5;
  }

  static canMoveForward() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    console.log(randomValue);
    if (randomValue >= 4) {
      return true;
    }
    return false;
  }
}

export default Car;
