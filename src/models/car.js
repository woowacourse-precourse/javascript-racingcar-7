import { validateCarNameLength } from "../libs/validate.js";

export default class Car {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    validateCarNameLength(name);
    this.name = name;
    this.position = 0;
  }
  moveForward() {
    this.position += 1;
  }
  getPosition() {
    return this.position;
  }
}
