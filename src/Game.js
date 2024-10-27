import Car from './Car.js';
import RandomSingleDigitGenerator from './utils/RandomSingleDigitGenerator.js';
import OutputManager from './OutputManager.js';

class Game {
  constructor(carNames, attempts) {
    this.cars = this.createCars(carNames);
    this.attempts = attempts;
    this.randomSingleDigitGenerator = new RandomSingleDigitGenerator();
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  play() {
    OutputManager.printNewLine();
    OutputManager.printProgressTitle();
    this.runAttempts();
    this.printResult();
  }

  runAttempts() {
    for (let i = 0; i < this.attempts; i += 1) {
      this.runAttempt();
    }
  }

  runAttempt() {
    this.moveForwardCars();
    this.printProgressStatus();
  }

  moveForwardCars() {
    this.cars.forEach((car) => car.moveForward(this.randomSingleDigitGenerator));
  }

  printProgressStatus() {
    OutputManager.printProgress(this.cars);
  }

  printResult() {
    const winners = this.determineWinners();
    OutputManager.printWinners(winners);
  }

  determineWinners() {
    const maxPosition = this.getMaxPosition();
    return this.getWinnerNames(maxPosition);
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getWinnerNames(maxPosition) {
    return this.cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName());
  }
}

export default Game;
