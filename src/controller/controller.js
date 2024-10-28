import { verifyTryNumber } from '../model/verifyTryNumber.js';
import { verifyRacingCarName } from '../model/verifyRacingCarName.js';
import { isWinner } from '../model/isWinner.js';
import { getRace } from '../model/getRace.js';

import { inputRacingCarName } from '../view/inputRacingCarName.js';
import { inputTryNumber } from '../view/inputTryNumber.js';
import { printWinner } from '../view/printWinner.js';
import { progressRacingCar } from '../view/progressRacingCar.js';
import { printRunRacingCar } from '../view/printRunRacingCar.js';

class Controller {
  async run() {
    const inputCarName = await inputRacingCarName();

    const cars = await verifyRacingCarName(inputCarName);

    const inputNumber = await inputTryNumber();

    let tryNumber = verifyTryNumber(inputNumber);

    printRunRacingCar();

    while (tryNumber--) {
      await getRace(cars);

      await progressRacingCar(cars);
    }

    const winner = isWinner(cars);
    printWinner(winner);
  }
}

export default Controller;
