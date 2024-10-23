class Racing {
  #totalRounds;

  #cars;

  #result;

  constructor(totalRounds, cars) {
    this.#totalRounds = totalRounds;
    this.#cars = cars;
    this.#result = [];
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

    rounds.forEach((round) => {
      const distances = this.#try();

      if (round === totalRounds) {
        this.#result = distances;
      }
    });
  }
}

export default Racing;
