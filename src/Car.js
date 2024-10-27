import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  generateRandomValue() {
    return Random.pickNumberInRange(0, 9);
  }

  tryToMove(randomValue) {
    if (this.canMove(randomValue)) {
      this.moveForward();
    }
  }

  canMove(randomValue) {
    return randomValue >= 4;
  }

  moveForward() {
    this.moveCount += 1;
  }
}

export default Car;
