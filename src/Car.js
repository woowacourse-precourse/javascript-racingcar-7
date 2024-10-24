import { Random } from '@woowacourse/mission-utils';

const ENOUGH_POWER = 4;
const RANDOM_RANGE = Object.freeze({
  MIN: 0,
  MAX: 9,
});
const MOVING_VALUE = Object.freeze({
  FORWARD: 1,
  STOP: 0,
});

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  actionOneTurn() {
    const randomNumber = Random.pickNumberInRange(
      RANDOM_RANGE.MIN,
      RANDOM_RANGE.MAX
    );
    this.move(randomNumber);
  }

  move(power) {
    if (power >= ENOUGH_POWER) this.position += MOVING_VALUE.FORWARD;
    else this.position += MOVING_VALUE.STOP;
  }
}

export default Car;
