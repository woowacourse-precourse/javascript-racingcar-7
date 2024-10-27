import isCarMoving from './Utils/isCarMoving.js';

export default class Car {
  #moveCount;
  #carName;

  constructor(carName) {
    this.#carName = carName;
    this.#moveCount = 0;
  }

  move() {
    const moving = isCarMoving();
    this.#moveCount += moving;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  getCarName() {
    return this.#carName;
  }
}
