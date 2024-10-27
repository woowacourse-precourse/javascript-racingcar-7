class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    this.#distance += 1;
  }

  getCarInformation() {
    return { name: this.#name, distance: this.#distance };
  }
}

export default Car;
