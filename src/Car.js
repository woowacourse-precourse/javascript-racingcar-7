import { Random } from '@woowacourse/mission-utils';
import { CarInfo, MovingValue, RandomRange } from './constants/racingConfig.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = CarInfo.INITIAL_POSITION;
  }

  actionOneTurn() {
    const randomNumber = Random.pickNumberInRange(
      RandomRange.MIN,
      RandomRange.MAX
    );
    this.move(randomNumber);
  }

  move(power) {
    if (power >= CarInfo.ENOUGH_POWER) this.position += MovingValue.FORWARD;
    else this.position += MovingValue.STOP;
  }
}

export default Car;
