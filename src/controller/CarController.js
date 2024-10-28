import InputView from '../views/InputView';
import Car from '../models/Car';
import AttemptCount from '../models/AttemptCount';
import generateRandomNumber from '../utils/generateRandomNumber';
import OutputView from '../views/OutputView';

class CarController {
  async init() {
    const carNames = await this.getCarNames();
    const cars = carNames.map((name) => new Car(name));

    const inputCount = await this.getAttemptCount();
    const attemptCount = new AttemptCount(inputCount);
    this.#playGames(attemptCount, cars);
    this.#printWinners(cars);
  }

  async getCarNames() {
    const carNames = await InputView.carNames();
    return carNames.split(',');
  }

  async getAttemptCount() {
    const attemptCount = await InputView.attemptCount();
    return attemptCount;
  }

  #playGames(attemptCount, cars) {
    this.#printResult();

    while (attemptCount.hasAttemptsRemaining()) {
      this.#moveCars(cars);
      this.#printCarStatus(cars);
      this.#decrementAttempt(attemptCount);
    }
  }

  #printResult() {
    OutputView.printResult();
  }

  #moveCars(cars) {
    cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      car.movePosition(randomNumber);
    });
  }

  #printCarStatus(cars) {
    cars.forEach((car) => {
      const carStatus = car.getResult();
      OutputView.printCarStatus(carStatus);
    });
  }

  #decrementAttempt(attemptCount) {
    attemptCount.decreaseAttempts();
  }

  #getWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
    const winners = cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getCarName());
    return winners;
  }

  #printWinners(cars) {
    const winners = this.#getWinners(cars);
    OutputView.printWinners(winners);
  }
}

export default CarController;
