import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getCarName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}
