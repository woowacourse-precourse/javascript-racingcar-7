export class Car {
  #name;
  #count;

  constructor(name) {
    this.#name = name;
    this.#count = 0;
  }

  getName() {
    return this.#name;
  }

  getCount() {
    return this.#count;
  }

  forwardMove() {
    return (this.#count += 1);
  }
}
