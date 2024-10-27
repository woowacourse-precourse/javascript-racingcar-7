import { MissionUtils } from '@woowacourse/mission-utils';

const FORWARD_CRITERION = 4;

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  generateRandom() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  forward() {
    if (this.generateRandom() >= FORWARD_CRITERION) {
      this.position++;
    }
  }
}

export default Car;
