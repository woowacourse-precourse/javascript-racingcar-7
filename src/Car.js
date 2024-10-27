import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveForwardCnt = 0;
  }

  moveForward() {
    const randomValueForMovement = Random.pickNumberInRange(0, 9);
    if (randomValueForMovement >= 4) this.moveForwardCnt += 1;
  }

  getMoveForwardCnt() {
    return this.moveForwardCnt;
  }

  getCarName() {
    return this.name;
  }
}

export default Car;
