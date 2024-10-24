import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { CONSOLE_MESSAGE } from './constant.js';
import {
  errorString,
  getUserInput,
  isIntegerNumber,
  isNumber,
  isPositiveNumber,
} from './util.js';

class RacingGameManager {
  #cars = [];

  #tryCount = 0;

  static MAX_CAR_COUNT = 50;

  static MAX_TRY_COUNT = 500;

  async playGame() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);
    this.#validateCarInput(carInput);
    this.#cars = carInput.split(',').map((carName) => new Car(carName));

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );
    this.#validateTryCountInput(tryCountInput);
    this.#tryCount = Number(tryCountInput);

    this.#startGame();
  }

  #validateCarInput(input) {
    if (!input.includes(',')) {
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_CAR_COUNT_ERROR));
    }

    const carNames = input.split(',');
    const deduplicatedCarNames = new Set(carNames);
    if (carNames.length !== deduplicatedCarNames.size) {
      throw new Error(errorString(CONSOLE_MESSAGE.DUPLICATED_CAR_NAME_ERROR));
    }

    if (carNames.length > RacingGameManager.MAX_CAR_COUNT) {
      throw new Error(
        errorString(
          `경주할 자동차는 ${RacingGameManager.MAX_CAR_COUNT}대 이하만 가능합니다.`,
        ),
      );
    }
  }

  #validateTryCountInput(input) {
    const inputToNumber = Number(input);

    if (!isNumber(inputToNumber)) {
      throw new Error(
        errorString(CONSOLE_MESSAGE.INVALID_TRY_COUNT_TYPE_ERROR),
      );
    }

    if (!isPositiveNumber(inputToNumber) || !isIntegerNumber(inputToNumber)) {
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_TRY_COUNT_ERROR));
    }

    if (inputToNumber > RacingGameManager.MAX_TRY_COUNT) {
      throw new Error(
        errorString(
          `시도 횟수는 ${RacingGameManager.MAX_TRY_COUNT} 이하만 가능합니다.`,
        ),
      );
    }
  }

  #startGame() {
    Console.print('\n실행 결과');
    this.#cars.forEach((car) => {
      car.move();
      car.printCarPosition();
    });
    Console.print('');
  }
}

export default RacingGameManager;
