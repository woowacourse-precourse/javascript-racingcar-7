import movingCondition from "../utils/movingCondition.js";

class Car {
  #carName;
  #carPostion;

  constructor(carName) {
    this.#carName = carName;
    this.#carPostion = 0;
  }

  move() {
    this.#carPostion = movingCondition(this.#carPostion);
  }
}

export default Car;