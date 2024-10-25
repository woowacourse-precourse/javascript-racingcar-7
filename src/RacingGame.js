import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { ERROR_DETAILS } from './constants.js';

class RacingGame {
  #cars;
  #ranForSeconds;

  constructor(carNames) {
    RacingGame.validateCarNames(carNames);
    RacingGame.ensureCarNamesNotDuplicate(carNames);

    this.#cars = carNames.map((carName) => new Car(carName));
    this.#ranForSeconds = 0;
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

    if (carName.trim() === '') {
      throw new Error(ERROR_DETAILS.CARNAME_EMPTY);
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

    if (!Number.isInteger(seconds)) {
      throw new Error(ERROR_DETAILS.SECONDS_NOT_INTEGER);
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

    this.#ranForSeconds = seconds;
    this.#cars.forEach((car) => {
      car.runForSeconds(seconds);
    });

    return this;
  }

  printHistory() {
    Console.print('\n실행 결과')

    for (let second = 1; second <= this.#ranForSeconds; ++second) {
      this.#cars.forEach((car) => {
        Console.print(car.getStateAtSecond(second));
      });
      Console.print('');
    }
  }
}

export default RacingGame;
