import {
  verifyRacingCarName,
  verifyTryNumber,
  isWinner,
  getRace,
} from '../model/model.js';

import {
  inputRacingCarName,
  inputTryNumber,
  printWinner,
  progressRacingCar,
  printRunRacingCar,
} from '../view/view.js';

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
