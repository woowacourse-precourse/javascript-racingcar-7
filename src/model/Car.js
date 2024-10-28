import { MOVE_DISTANCE } from '../constants/Config.js';

class Car {
  #name;
  #moveCount;

  constructor (name) {
    this.#name = name;
    this.#moveCount = 0;
  }

  get name () {
    return this.#name;
  }

  get status () {
    return { name: this.#name, move: this.#moveCount };
  }

  move () {
    this.#moveCount += MOVE_DISTANCE;
  }
}

export default Car;
