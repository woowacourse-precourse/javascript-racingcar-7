class Racing {
  #tryCount;

  #cars;

  constructor(tryCount, cars) {
    this.#tryCount = tryCount;
    this.#cars = cars;
  }

  try() {
    const cars = [...this.#cars];
    const distances = cars.map((car) => car.driving());
    return distances;
  }

  play() {
    const tryCount = this.#tryCount;
    const rounds = Array.from(
      { length: tryCount },
      (arrayLike, index) => index + 1,
    );

    rounds.forEach(() => this.try());
  }
}

export default Racing;
