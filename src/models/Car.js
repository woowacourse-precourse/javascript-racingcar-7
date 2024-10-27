import { CAR_NAME_LENGTH, ERROR_MESSAGE } from '../constants/constant';

class Car {
  #carName;

  constructor(inputName) {
    this.#isCarNameValidLength(inputName);
    this.#setCarName(inputName);
  }

  #isCarNameValidLength(carName) {
    if (
      carName.length > CAR_NAME_LENGTH.maxRange ||
      carName.length < CAR_NAME_LENGTH.minRange
    ) {
      throw new Error(ERROR_MESSAGE.carNameError);
    }
  }

  #setCarName(inputName) {
    this.#carName = inputName;
  }

  getCarName() {
    return this.#carName;
  }
}

export default Car;
