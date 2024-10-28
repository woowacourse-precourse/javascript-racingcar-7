import { verifyRacingCarName, verifyTryNumber, isWinner, getRace } from '../model/model.js';

import { inputRacingCarName, inputTryNumber, printWinner, progressRacingCar, printRunRacingCar } from '../view/view.js';

class Controller {
  async run() {
    const cars = await this.getValidatedCars();
    const tryNumber = await this.getValidatedTryNumber();

    printRunRacingCar();
    await this.runRaces(cars, tryNumber);

    const winner = isWinner(cars);

    printWinner(winner);
  }

  async getValidatedCars() {
    const inputCarName = await inputRacingCarName();

    return verifyRacingCarName(inputCarName);
  }

  async getValidatedTryNumber() {
    const inputNumber = await inputTryNumber();

    return verifyTryNumber(inputNumber);
  }

  async runRaces(cars, tryNumber) {
    Array.from({ length: tryNumber }).forEach(async () => {
      getRace(cars);
      progressRacingCar(cars);
    });
  }
}

export default Controller;
