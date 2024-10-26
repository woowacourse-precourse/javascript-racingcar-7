import { readUserInput } from './util/missionUtil.js';
import { START_MESSAGE } from './util/constant.js';
import Car from './Car.js';
import { validCarName, validTryNumber } from './util/validation.js';

class Race {
  #cars;
  #tryNumber;

  async handleCar() {
    const cars = await readUserInput(START_MESSAGE.CAR_NAME_INPUT);
    const carsArray = cars.split(',').map((car) => car.trim());
    validCarName(carsArray);
    this.setCarNames(carsArray);
  }

  async handleTryNumber() {
    const tryNumber = await readUserInput(START_MESSAGE.TRY_NUMBER_INPUT);
    validTryNumber(tryNumber);
    this.setTryNumber(tryNumber);
  }

  setTryNumber(number) {
    this.tryNumber = number;
  }

  setCarNames(cars) {
    this.#cars = cars.map((carName) => new Car(carName));
  }
}

export default Race;
