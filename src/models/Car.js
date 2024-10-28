import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  updateDistance() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }

  getDistance() {
    return this.distance;
  }
}
