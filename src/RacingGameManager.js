import { errorString, getUserInput } from './util.js';
import { CONSOLE_MESSAGE } from './constant.js';
import Car from './Car.js';

class RacingGameManager {
  #cars = [];

  #tryCount = 0;

  constructor() {}

  async playGame() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);

    this.#validateCarInput(carInput);

    this.#cars = carInput.split(',').map((carName) => new Car(carName));

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );

    this.#tryCount = Number(tryCountInput);
  }

  #validateCarInput(input) {
    if (!input || !input.includes(',')) {
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_CAR_COUNT_ERROR));
    }
  }
}

export default RacingGameManager;
