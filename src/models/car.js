import { RULES } from '../constants/index.js';
export class Car {
  #carName;
  #carPosition;

  constructor(carName) {
    this.#carName = carName;
    this.#carPosition = RULES.CAR_START_POSITION;
  }

  moveForward() {
    this.#carPosition += RULES.CAR_PROGRESS_LENGTH;
  }

  getCarName() {
    return this.#carName;
  }

  getCarPosition() {
    return this.#carPosition;
  }
}
