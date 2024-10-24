const DISTANCE = 1;
const MAX_NAME_LENGTH = 5;

const NAME_LENGTH_ERROR_MESSAGE = '이름은 5자 이하만 가능합니다';

export class Car {
  #name;
  #length = 0;

  constructor(name) {
    this.#name = name;
    this.#validateName(name);
  }

  #validateName(name) {
    if(name.length > MAX_NAME_LENGTH) throw new Error(NAME_LENGTH_ERROR_MESSAGE);
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
