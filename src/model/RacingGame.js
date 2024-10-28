import Car from "./Car.js";

export default class RacingGame {
  #repeatCount;

  #cars;

  #raceLogs;

  constructor() {
    this.#cars = [];
    this.#repeatCount = 0;
    this.#raceLogs = [];
  }

  static formatNamesToCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  setGame(carNames, repeatCount) {
    this.#cars = RacingGame.formatNamesToCars(carNames);
    this.#repeatCount = repeatCount;
  }

  start() {
    for (let i = 0; i < this.#repeatCount; i += 1) {
      this.#play();
      this.#raceLogs.push(this.#cars.map((car) => ({ name: car.getName(), dist: car.getDist() })));
    }
  }

  #play() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  getRaceLogs() {
    return this.#raceLogs;
  }

  getWinners() {
    const finalRaceLog = this.#raceLogs[this.#repeatCount - 1];

    const maxDist = Math.max(...finalRaceLog.map((car) => car.dist));
    return finalRaceLog.reduce((winners, car) => {
      if (car.dist === maxDist) winners.push(car.name);
      return winners;
    }, []);
  }
}
