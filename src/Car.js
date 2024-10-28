import getRandomNumber from './utils/getRandomNumber.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = getRandomNumber();
    if (randomNumber >= 4) {
      this.#position += 1;
    }
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
