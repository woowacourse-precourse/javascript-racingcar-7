import {
  EMPTY_NAME_MESSAGE,
  MAX_NAME_MESSAGE,
} from "./constants/errorMessage.js";

class Car {
  static MAX_NAME_LENGTH = 5;

  #name;
  #progressCount;

  constructor(name) {
    this.#validateNameEmpty(name);
    this.#validateNameLength(name);

    this.#name = name;
    this.#progressCount = 0;
  }

  #validateNameEmpty(name) {
    if (name === "") {
      throw new Error(EMPTY_NAME_MESSAGE);
    }
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
