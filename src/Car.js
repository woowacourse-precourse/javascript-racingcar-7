import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveHistory = '';
  }

  get getName() {
    return this.name;
  }

  get getMoveHistory() {
    return this.moveHistory;
  }

  move() {
    const record = Random.pickNumberInRange(0, 9);
    if (record >= 4) {
      this.moveHistory += '-';
    }

    Console.print(`${this.name} : ${this.moveHistory}`);
  }
}

export default Car;
