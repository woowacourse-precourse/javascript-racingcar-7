import { Console } from '@woowacourse/mission-utils';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  printInfo() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#distance)}`);
  }
}

export default Car;
