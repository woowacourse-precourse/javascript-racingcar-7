import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  getName() {
    return this.name;
  }

  forwardOrNot() {
    let num = Random.pickNumberInRange(0, 9);
    if (num >= 4) this.moveCount++;
  }

  getProgress() {
    Console.print(`${this.name} : ${'-'.repeat(this.moveCount)}`);
  }

  getCount() {
    return this.moveCount;
  }
}

export default Car;
