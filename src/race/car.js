import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.progress += 1;
    }
  }

  printProgress() {
    Console.print(`${this.name} : ${'-'.repeat(this.progress)}`);
  }
}

export default Car;
