class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(randomNumber) {
    if (this.#isMovable(randomNumber)) {
      this.#position += 1;
    }
  }

  #isMovable(randomNumber) {
    return randomNumber >= 4;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
