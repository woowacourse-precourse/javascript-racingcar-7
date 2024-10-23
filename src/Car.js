import { Console } from "@woowacourse/mission-utils";

class Car {
  #name;
  #progressCount;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  getName() {
    return this.#name;
  }

  getProgressCount() {
    return this.#progressCount;
  }

  increaseProgressCount() {
    this.#progressCount = this.#progressCount + 1;
  }
}

export default Car;
