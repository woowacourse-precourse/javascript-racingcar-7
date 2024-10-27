// @ts-check

export class CarModel {
  /** @type {string} */
  #name;

  /** @type {number} */
  #travelDistance;

  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#travelDistance = 0;
  }

  moveForward() {
    this.#travelDistance += 1;
  }
}
