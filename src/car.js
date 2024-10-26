import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) this.moveCount += 1;
  }
}

export default Car;
