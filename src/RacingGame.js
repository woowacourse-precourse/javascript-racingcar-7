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
      this.printResultsByStep(this.cars);
      count++;
    }
  }

  printResultByStep(cars) {
    this.cars.forEach((car) => {
      console.log(
        `${car.name} : ${RacingGame.FORWARD_INDICATOR.repeat(car.forwardCount)}`
      );
    });
    console.log('\n');
  }
}

export default RacingGame;
