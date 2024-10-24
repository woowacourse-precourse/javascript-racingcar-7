import { NAME_LENGTH_ERROR_MESSAGE } from "./constants/Messages.js";
import { DISTANCE, MAX_NAME_LENGTH } from "./constants/Constants.js";

export class Car {
  #name;
  #length = 0;

  constructor(name) {
    this.#name = name;
    this.#validateName(name);
  }

  #validateName(name) {
    if (name.length > MAX_NAME_LENGTH) throw new Error(NAME_LENGTH_ERROR_MESSAGE);
  }

  move() {
    this.#length += DISTANCE;
  }

  getName() {
    return this.#name;
  }

  getLength() {
    return this.#length;
  }
}
