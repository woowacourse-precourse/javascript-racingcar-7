import { printResult, readUserInput } from './util/missionUtil.js';
import { RESULT_MESSAGE, START_MESSAGE } from './util/constant.js';
import Car from './Car.js';
import { validCarName, validTryNumber } from './util/validation.js';

class Race {
  #cars;
  #tryNumber;

  async play() {
    await this.processCars();
    await this.processTryNumber();
    this.executeResult();
  }

  async processCars() {
    const cars = await readUserInput(START_MESSAGE.CAR_NAME_INPUT);
    const carsArray = cars.split(',').map((car) => car.trim());
    validCarName(carsArray);
    this.setCar(carsArray);
  }

  async processTryNumber() {
    const tryNumber = await readUserInput(START_MESSAGE.TRY_NUMBER_INPUT);
    validTryNumber(tryNumber);
    this.setTryNumber(tryNumber);
  }

  setTryNumber(number) {
    this.#tryNumber = number;
  }

  setCar(cars) {
    this.#cars = cars.map((carName) => new Car(carName));
  }

  async executeResult() {
    await printResult(RESULT_MESSAGE.EXECUTE);
    while (this.#tryNumber > 0) {
      this.#cars.forEach((car) => car.getMoveForwardResult());
      await printResult('');
      this.#tryNumber -= 1;
    }
  }
}

export default Race;
