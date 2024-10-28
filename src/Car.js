import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.dist = 0;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  canMove(number) {
    return number >= 4;
  }

  increaseDistance() {
    this.dist++;
  }

  move() {
    const randomNumber = this.getRandomNumber();
    if (this.canMove(randomNumber)) {
      this.increaseDistance();
    }
  }
}

export default Car;
