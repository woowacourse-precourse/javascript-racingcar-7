export default class CarModel {
  #name;
  #step;

  constructor(name) {
    this.#name = name;
    this.#step = 0;
  }

  move() {
    this.#step += 1;
  }

  getName() {
    return this.#name;
  }

  getStep() {
    return this.#step;
  }
}
