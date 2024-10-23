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
}

export default Car;
