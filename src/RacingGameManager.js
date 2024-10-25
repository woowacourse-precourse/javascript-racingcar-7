import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constant.js';
import {
  errorString,
  getUserInput,
  isIntegerNumber,
  isNumber,
  isPositiveNumber,
  printEmptyString,
} from './util.js';

class RacingGameManager {
  #cars;
  #tryCount;

  static MAX_CAR_COUNT = 50;
  static MAX_TRY_COUNT = 500;

  constructor() {
    this.#cars = [];
    this.#tryCount = 0;
  }

  async playGame() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);
    this.#cars = this.#getValidatedCar(carInput);

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );
    this.#tryCount = this.#getValidatedTryCount(tryCountInput);

    this.#startGame();

    this.#printWinner();
  }

  #getValidatedCar(car) {
    if (!car.includes(',')) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_CAR_COUNT));
    }

    const carNames = car.split(',');
    const deduplicatedCarNames = new Set(carNames);
    if (carNames.length !== deduplicatedCarNames.size) {
      throw new Error(errorString(ERROR_MESSAGE.DUPLICATED_CAR_NAME));
    }

    if (carNames.length > RacingGameManager.MAX_CAR_COUNT) {
      throw new Error(
        errorString(
          `경주할 자동차는 ${RacingGameManager.MAX_CAR_COUNT}대 이하만 가능합니다.`,
        ),
      );
    }

    return carNames.map((carName) => new Car(carName));
  }

  #getValidatedTryCount(tryCount) {
    const parsedTryCount = Number(tryCount);

    if (!isNumber(parsedTryCount)) {
      throw new Error(errorString(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE));
    }

    if (!isPositiveNumber(parsedTryCount) || !isIntegerNumber(parsedTryCount)) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_TRY_COUNT));
    }

    if (parsedTryCount > RacingGameManager.MAX_TRY_COUNT) {
      throw new Error(
        errorString(
          `시도 횟수는 ${RacingGameManager.MAX_TRY_COUNT} 이하만 가능합니다.`,
        ),
      );
    }

    return parsedTryCount;
  }

  #startGame() {
    Console.print(CONSOLE_MESSAGE.GAME_START_MESSAGE);
    for (let i = 0; i < this.#tryCount; i++) {
      this.#cars.forEach((car) => {
        car.move();
        car.printCarPosition();
      });
      printEmptyString();
    }
  }

  #printWinner() {}
}

export default RacingGameManager;
