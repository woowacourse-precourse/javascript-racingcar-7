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

  move() {
    const randomNumber = this.getRandomNumber();
  }
}

export default Car;
