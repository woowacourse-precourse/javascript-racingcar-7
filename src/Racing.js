class Racing {
  #tryCount;

  #cars;

  constructor(tryCount, cars) {
    this.#tryCount = tryCount;
    this.#cars = cars;
  }

  play() {
    const cars = [...this.#cars];
    const distances = cars.map((car) => car.driving());
    return distances;
  }
}

export default Racing;
