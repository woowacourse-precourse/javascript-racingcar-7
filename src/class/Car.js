import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  generateRandom() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  forward() {
    if (this.generateRandom() >= 4) {
      this.position++;
    }
  }
}

export default Car;
