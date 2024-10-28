import { getRandomDigit } from '../utils/random.js';

class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  static #MOVE_THRESHOLD = 4;

  move() {
    const randomNumber = getRandomDigit();
    return randomNumber >= RacingCar.#MOVE_THRESHOLD;
  }
}

export default RacingCar;
