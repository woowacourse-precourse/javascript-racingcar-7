import { CONSOLE_MESSAGE } from './constant.js';
import { errorString } from './util.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#validateName(name);

    this.#name = name;
    this.#position = 0;
  }

  #validateName(name) {
    if (name.length > 5) {
      throw new Error(errorString(CONSOLE_MESSAGE.MAX_CAR_NAME_LENGTH_ERROR));
    }
  }
}

export default Car;
