import { Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(randonNumber) {
    if (randonNumber >= 4) {
      this.position += 1;
    }
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
