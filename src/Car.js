import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  getStatus() {
    return `${this.name} : ${this.position}`;
  }

  getPositionLength() {
    return this.position.length;
  }
}

export default Car;
