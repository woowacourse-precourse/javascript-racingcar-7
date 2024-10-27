class Race {
  #round;
  #racingCars;

  constructor(round = 0, racingCars = []) {
    this.#round = round;
    this.#racingCars = racingCars;
  }

  getRacingCars() {
    return this.#racingCars;
  }

  getTotalRound() {
    return this.#round;
  }

  addNewCar(car) {
    this.#racingCars.push(car);
  }
}

export default Race;
