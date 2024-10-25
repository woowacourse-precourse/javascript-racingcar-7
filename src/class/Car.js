import { Random } from '@woowacourse/mission-utils';

const getRandomSingleDigit = () => {
  return Random.pickNumberInRange(0, 9);
};

class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  canMoveForward(num) {
    return num >= 4;
  }

  moveForward() {
    this.score += 1;
  }

  tryMove() {
    const randomNumber = getRandomSingleDigit();
    if (this.canMoveForward(randomNumber)) {
      this.moveForward();
    }
  }
}

export default Car;
