class Race {
  #cars;

  #time;

  constructor(cars, time) {
    this.#cars = cars;
    this.#time = time;
  }

  get cars() {
    return this.#cars;
  }

  get time() {
    return this.#time;
  }

  moveCars() {
    for (let i = 0; i < this.#cars.length; i += 1) {
      this.#cars[i].tryMoveForward();
    }
    this.#time -= 1;
  }
}

export default Race;
