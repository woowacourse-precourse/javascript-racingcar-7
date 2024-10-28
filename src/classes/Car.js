import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  attemptMove() {
    const pickedNumber = Random.pickNumberInRange(0, 9);

    if (4 <= pickedNumber) {
      this.distance++;
      return true;
    }

    return false;
  }
}

export default Car;
