import Validator from './Validator.js';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = this.#validateCarName(name);
    this.#distance = 0;
  }

  #setNameIfEmpty(name) {
    if (name === '') return (this.#name = 'null');
    return name;
  }

  #validateCarName(name) {
    const validator = new Validator();
    const validNames = validator.validateCarName(name);
    return this.#setNameIfEmpty(validNames);
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  moveForward() {
    this.#distance++;
  }
}

export default Car;
