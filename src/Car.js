import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveForwardCnt = 0;
  }

  getRandomValue() {
    return Random.pickNumberInRange(0, 9);
  }

  moveForward() {
    if (this.getRandomValue() >= 4) this.moveForwardCnt += 1;
  }

  printMoveResult() {
    Console.print(`${this.name} : ${'-'.repeat(this.moveForwardCnt)}`);
  }

  getMoveFowradCnt() {
    return this.moveForwardCnt;
  }

  getName() {
    return this.name;
  }
}

export default Car;
