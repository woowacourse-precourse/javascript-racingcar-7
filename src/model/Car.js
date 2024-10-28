import movingCondition from "../utils/movingCondition.js";

class Car {
  #carName;
  #carPostion;

  constructor(carName) {
    this.#carName = carName;
    this.#carPostion = 0;
  }

  getName() {
    return this.#carName;
  }
  
  getPosition() {
    return this.#carPostion;
  }

  move() {
    this.#carPostion = movingCondition(this.#carPostion);
  }
}

export default Car;