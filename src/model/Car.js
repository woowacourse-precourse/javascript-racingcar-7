import { CONFIG } from '../constant/config.js';
import { getRandomNumber } from '../util/Random.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  tryToMoveForward() {
    const randomValue = getRandomNumber(
      CONFIG.MIN_RANDOM_NUMBER,
      CONFIG.MAX_RANDOM_NUMBER
    );
    if (randomValue >= CONFIG.CAR_MOVING_CONDITION) {
      this.moveForward();
    }
  }

  moveForward() {
    this.#position += CONFIG.CAR_MOVE_DISTANCE;
  }
}

export default Car;
