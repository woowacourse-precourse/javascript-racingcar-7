import { Console } from '@woowacourse/mission-utils';
import { getUserInput } from './util.js';
import { CONSOLE_MESSAGE } from './constant.js';
import Car from './Car.js';

class RacingGameManager {
  constructor() {}

  async playGame() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );

    const cars = carInput.split(',').map((carName) => new Car(carName));

    Console.print(carInput);
    Console.print(tryCountInput);
  }
}

export default RacingGameManager;
