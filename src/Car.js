import { Console } from "@woowacourse/mission-utils";

class Car {
  #carName;
  #tryCount;
  #progressCount;

  constructor(carName, tryCount) {
    this.#carName = carName;
    this.#tryCount = tryCount;
    this.#progressCount = 0;
  }
}

export default Car;
