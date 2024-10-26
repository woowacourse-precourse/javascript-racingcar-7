class Car {
  #name;
  #numberOfAdvance;

  constructor(name = "", numberOfAdvance = 0) {
    name;
    numberOfAdvance;
  }

  getName() {
    return this.#name;
  }

  getNumberOfAdvance() {
    return this.#numberOfAdvance;
  }

  advance(canAdvance) {
    if (canAdvance) {
      this.#numberOfAdvance += 1;
    }
  }
}

export default Car;
