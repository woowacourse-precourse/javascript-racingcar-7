import { Console } from '@woowacourse/mission-utils';

import Input from './Input.js';
import Racing from './Racing.js';

import { validateCars, validateCount } from './validate.js';
import { COMMON_MESSAGE } from './message.js';

class App {
  async run() {
    const inputCars = new Input(validateCars.validation);
    await inputCars.enterValue(COMMON_MESSAGE.INPUT_CARS);

    const inputCount = new Input(validateCount.validation);
    await inputCount.enterValue(COMMON_MESSAGE.INPUT_COUNT);

    const racing = new Racing(inputCars, +inputCount);
    const racingResult = racing.doRace();

    this.printChampions(racingResult, +inputCount);
  }

  printChampions(carModels, count) {
    const WinnerCars = carModels.filter((car) => car.movementCount === count);
    const WinnerCarNames = WinnerCars.map((car) => car.name);

    Console.print(`${COMMON_MESSAGE.OUTPUT} ${WinnerCarNames.join(", ")}`);
  }
}

export default App;
