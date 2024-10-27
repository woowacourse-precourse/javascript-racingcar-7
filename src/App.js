import { Console } from '@woowacourse/mission-utils';

import Input from './Input.js';
import Racing from './Racing.js';

import { validateCars, validateCount, validateWinner } from './validate.js';
import { COMMON_MESSAGE } from './message.js';

class App {
  async run() {
    const inputCars = new Input(validateCars.validation);
    await inputCars.enterValue(COMMON_MESSAGE.INPUT_CARS);
    const carNames = inputCars.getValue();

    const inputCount = new Input(validateCount.validation);
    await inputCount.enterValue(COMMON_MESSAGE.INPUT_COUNT);
    const count = inputCount.getValue();

    const racing = new Racing(carNames, +count);
    const racingResult = racing.doRace();

    this.printChampions(racingResult, +count);
  }

  printChampions(carModels, count) {
    const winnerCars = carModels.filter((car) => car.movementCount === count);
    validateWinner(winnerCars);

    const winnerCarNames = winnerCars.map((car) => car.name);

    Console.print(`${COMMON_MESSAGE.OUTPUT} ${winnerCarNames.join(", ")}`);
  }
}

export default App;
