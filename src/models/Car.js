class Car {
  #carName;

  constructor(inputName) {
    this.#setCarName(inputName);
  }

  #setCarName(inputName) {
    this.#carName = inputName;
  }

  getCarName() {
    return this.#carName;
  }
}

export default Car;
