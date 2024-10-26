import { Random } from '@woowacourse/mission-utils';

class CarModel {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const value = Random.pickNumberInRange(0, 9);
    if (value >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default CarModel;
