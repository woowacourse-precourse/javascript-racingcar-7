import { validateCarNameLength } from "../libs/validate.js";
import { isMoveForward } from "../libs/helpers.js";
import { CONFIG } from "../libs/constants.js";

export default class Car {
  #name;
  #position;
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    validateCarNameLength(name);
    this.#name = name;
    this.#position = CONFIG.CAR_DEFAULT_POSITION;
  }

  attemptMove() {
    if (isMoveForward()) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#position += CONFIG.CAR_DEFAULT_MOVE_POSITION_VALUE;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
