import Car from './Car.js';

export default class Cars {
  #cars;
  #raceHistory;

  constructor(carNames) {
    this.#cars = carNames.map(carName => new Car(carName));
    this.#raceHistory = [];
  }

  #makeRaceHistory(car) {
    const moveCount = car.getMoveCount();
    const moveDistance = '-'.repeat(moveCount);
    return `${car.getCarName()} : ${moveDistance}`;
  }

  #getMaxMoveCount() {
    const moveCounts = this.#cars.map(car => car.getMoveCount());
    const maxMoveCount = Math.max(...moveCounts);
    return maxMoveCount;
  }

  moveAllCars() {
    this.#cars.forEach(car => {
      car.move();
    });
  }

  updateRaceHistory() {
    const roundHistory = this.#cars.map(car => this.#makeRaceHistory(car));
    this.#raceHistory.push(roundHistory);
  }

  getRaceHistory() {
    return this.#raceHistory.map(round => round.join('\n')).join('\n\n');
  }

  getWinnerNames() {
    const maxMoveCount = this.#getMaxMoveCount();
    return this.#cars
      .filter(car => car.getMoveCount() === maxMoveCount)
      .map(car => car.getCarName())
      .join(', ');
  }
}
