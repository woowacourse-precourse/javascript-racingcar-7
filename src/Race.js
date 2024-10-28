import Car from './Car.js';

class Race {
  #cars;
  #roundCount;

  constructor(carNames, roundCount) {
    this.#cars = carNames.map((name) => new Car(name));
    this.#roundCount = roundCount;
  }

  #moveCars() {
    this.#cars.forEach((car) => car.move());
  }

  #runRounds() {
    for (let i = 0; i < this.#roundCount; i++) {
      this.#moveCars();
    }
  }

  start() {
    this.#runRounds();
  }
}

export default Race;
