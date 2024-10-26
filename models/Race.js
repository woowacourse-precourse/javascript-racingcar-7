class Race {
  #round;
  #racingCars;

  constructor(round = 0, racingCars = []) {
    round;
    racingCars;
  }

  getRacingCars() {
    return this.#racingCars;
  }

  getRound() {
    return this.#round;
  }

  addNewCar(car) {
    this.#racingCars.push(car);
  }
}

export default Race;
