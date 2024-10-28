import { getRandomNumber } from '../utils/getRandomNumber';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = getRandomNumber();
    if (randomNumber < 4) return;

    this.#position += 1;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
