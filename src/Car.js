import { Console } from "@woowacourse/mission-utils";

class Car {
  #carName;
  #progressCount;

  constructor(carName) {
    this.#carName = carName;
    this.#progressCount = 0;
  }

  getCarName() {
    return this.#carName;
  }

  getProgressCount() {
    return this.#progressCount;
  }

  increaseProgressCount() {
    this.#progressCount = this.#progressCount + 1;
  }
}

export default Car;
