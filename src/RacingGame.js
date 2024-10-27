import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { ERROR_DETAILS } from './constants.js';

class RacingGame {
  #cars;
  #runSeconds;

  constructor(carNames) {
    RacingGame.validateCarNames(carNames);
    RacingGame.ensureCarNamesNotDuplicate(carNames);

    this.#cars = carNames.map((carName) => new Car(carName));
    this.#runSeconds = 0;
  }

  static validateCarNames(carNames) {
    if (!Array.isArray(carNames)) {
      throw new Error(ERROR_DETAILS.CARNAMES_NOT_ARRAY);
    }

    if (carNames.length === 0) {
      throw new Error(ERROR_DETAILS.CARNAMES_EMPTY);
    }

    carNames.forEach((carName) => {
      RacingGame.validateCarName(carName);
    });
  }

  static validateCarName(carName) {
    if (typeof carName !== 'string') {
      throw new Error(ERROR_DETAILS.CARNAME_NOT_STRING);
    }

    if (carName === '') {
      throw new Error(ERROR_DETAILS.CARNAME_EMPTY);
    }

    if (carName.length > 5) {
      throw new Error(ERROR_DETAILS.CARNAME_LENGTH);
    }
  }

  static ensureCarNamesNotDuplicate(carNames) {
    if (!Array.isArray(carNames)) {
      throw new Error(ERROR_DETAILS.CARNAMES_NOT_ARRAY);
    }

    const carNamesSet = new Set(carNames);
    if (carNamesSet.size !== carNames.length) {
      throw new Error(ERROR_DETAILS.CARNAMES_DUPLICATE);
    }
  }

  static validateSeconds(seconds) {
    if (Number.isNaN(seconds)) {
      throw new Error(ERROR_DETAILS.SECONDS_NAN);
    }

    if (!Number.isSafeInteger(seconds)) {
      throw new Error(ERROR_DETAILS.SECONDS_NOT_SAFE_INTEGER);
    }

    if (seconds <= 0) {
      throw new Error(ERROR_DETAILS.SECONDS_NOT_POSITIVE);
    }
  }

  playFor(seconds) {
    RacingGame.validateSeconds(seconds);
    this.#runSeconds = seconds;

    for (let second = 1; second <= seconds; ++second) {
      this.#cars.forEach((car) => {
        car.runAt(second);
      });
    }

    return this;
  }

  printHistory() {
    Console.print('\n실행 결과')

    for (let second = 1; second <= this.#runSeconds; ++second) {
      this.#cars.forEach((car) => {
        Console.print(car.getStateAt(second));
      });

      Console.print('');
    }

    return this;
  }

  getWinnerNames() {
    const furthestPosition = Math.max(
      ...this.#cars.map((car) => car.getPositionAt(this.#runSeconds))
    );

    const winnerNames = this.#cars
      .filter((car) => car.getPositionAt(this.#runSeconds) === furthestPosition)
      .map((car) => car.getName());

    return winnerNames;
  }

  printWinners() {
    const winnerNames = this.getWinnerNames();
    Console.print(`최종 우승자 : ${winnerNames.join(', ')}`);
  }
}

export default RacingGame;
