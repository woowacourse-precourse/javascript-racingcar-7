class Car {
  #name;
  #moveCount;

  constructor (name) {
    this.#name = name;
    this.#moveCount = 0;
  }

  get name () {
    return this.#name;
  }

  get status () {
    return { name: this.#name, move: this.#moveCount };
  }

  move () {
    this.#moveCount += 1;
  }
}

export default Car;
