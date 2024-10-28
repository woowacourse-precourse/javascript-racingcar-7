import {
  INPUT_ERROR_MESSAGE,
  OVER_NAME_LENGTH_ERROR_MESSAGE,
} from "./constants/Messages.js";
import { MAX_NAME_LENGTH } from "./constants/Constants.js";

export class Car {
  #name;
  #length = 0;

  constructor(name) {
    this.#name = name;
    this.#validateName(name);
  }


  #validateName(name) {
    this.#checkLength(name);
    this.#checkEmpty(name);
  }

  #checkLength(name) {
    if (name.length > MAX_NAME_LENGTH) throw new Error(OVER_NAME_LENGTH_ERROR_MESSAGE);
  }

  #checkEmpty(name) {
    if (name.trim() === '') throw new Error(INPUT_ERROR_MESSAGE);
  }

  move(distance) {
    this.#length += distance;
  }

  getName() {
    return this.#name;
  }

  getLength() {
    return this.#length;
  }
}
