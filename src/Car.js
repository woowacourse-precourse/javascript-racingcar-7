import { Console } from "@woowacourse/mission-utils";
import ERROR_MESSAGE from "./constants/errorMessage.js";

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
      throw new Error(ERROR_MESSAGE.EMPTY_NAME);
    }
  }
  #validateNameLength(name) {
    if (name.length > Car.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.MAX_NAME);
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

  printCarmove() {
    Console.print(`${this.getName()} : ${"-".repeat(this.getProgressCount())}`);
  }
}

export default Car;
