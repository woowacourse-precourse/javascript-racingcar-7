import { Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.progress += 1;
    }
  }

  printProgress() {
    Console.print(`${this.name} : ${'-'.repeat(this.progress)}`);
  }
}

export default Car;
