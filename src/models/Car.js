import { GAME_SETTINGS } from '../constants/Symbol.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = GAME_SETTINGS.INITIAL_POSITION;
  }

  moveForward() {
    this.#position += GAME_SETTINGS.INCREASE_POSISION;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
