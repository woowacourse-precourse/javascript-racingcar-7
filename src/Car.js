const DISTANCE = 1;

export class Car {
  #name;
  #length = 0;

  constructor(name) {
    this.#name = name;
    this.#length = 0;
  }

  move() {
    this.#length += DISTANCE;
  }

  getName() {
    return this.#name;
  }

  getLength() {
    return this.#length;
  }
}
