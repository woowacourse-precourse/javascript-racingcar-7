import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  static FORWARD_INDICATOR = '-';

  constructor(cars, attemptCount) {
    this.cars = cars;
    this.attemptCount = attemptCount;
  }

  play() {
    let count = 0;
    while (count < this.attemptCount) {
      this.cars.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.forwardCount++;
        }
      });
      count++;
    }
  }
}

export default RacingGame;
