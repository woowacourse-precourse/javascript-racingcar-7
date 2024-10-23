class Racing {
  #totalRounds;

  #cars;

  constructor(totalRounds, cars) {
    this.#totalRounds = totalRounds;
    this.#cars = cars;
  }

  #try() {
    const cars = [...this.#cars];
    const distances = cars.map((car) => car.driving());
    return distances;
  }

  play() {
    const totalRounds = this.#totalRounds;
    const rounds = Array.from(
      { length: totalRounds },
      (arrayLike, index) => index + 1,
    );

    rounds.forEach(() => this.#try());
  }
}

export default Racing;
