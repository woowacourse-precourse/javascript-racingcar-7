import { Console, Random } from '@woowacourse/mission-utils';

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

  moveRandomProbability() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.#distance += 1;
    }
  }
}

export default Car;
