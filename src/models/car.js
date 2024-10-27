export class Car {
  #carName;
  #carPosition;

  constructor(carName) {
    this.#carName = carName;
    this.#carPosition = 0;
  }

  moveForward() {
    this.#carPosition += 1;
  }

  getCarName() {
    return this.#carName;
  }

  getCarPosition() {
    return this.#carPosition;
  }
}
