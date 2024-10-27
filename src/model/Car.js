import { getRandomNumberInRange } from '../util/random.js';

export default class Car {
  #name;
  #move;
  #generator;

  static CAR_MOVE_SPEED = 1;
  static CAR_MOVE_MINIMUM_VALUE = 4;

  constructor(name, generator = () => getRandomNumberInRange()) {
    this.#name = name;
    this.#move = 0;
    this.#generator = generator;
  }

  move() {
    if (this.#moveOption()) {
      this.#moveToward();
    }

    return { name: this.#name, move: this.#move };
  }

  #moveOption() {
    return this.#generator() >= Car.CAR_MOVE_MINIMUM_VALUE;
  }

  #moveToward() {
    return (this.#move += Car.CAR_MOVE_SPEED);
  }
}
