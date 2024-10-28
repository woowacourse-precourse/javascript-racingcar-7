import { validateCarNameLength } from "../libs/validate.js";
import { isMoveForward } from "../libs/helpers.js";

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
    this.#position = 0;
  }

  attemptMove() {
    if (isMoveForward()) {
      this.moveForward();
    }
  }

  moveForward() {
    this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
