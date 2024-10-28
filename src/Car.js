import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  run() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#position += 1;
    }
  }

  display() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#position)}`);
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
