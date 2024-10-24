import { MAX_NAME_MESSAGE } from "./constants/errorMessage.js";

class Car {
  static MAX_NAME_LENGTH = 5;

  #name;
  #progressCount;

  constructor(name) {
    this.#validateNameLength(name);

    this.#name = name;
    this.#progressCount = 0;
  }

  #validateNameLength(name) {
    if (name.length > Car.MAX_NAME_LENGTH) {
      throw new Error(MAX_NAME_MESSAGE);
    }
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
