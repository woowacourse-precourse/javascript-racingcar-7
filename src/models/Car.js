import {
  CAR_NAME_LENGTH,
  ERROR_MESSAGE,
  RANDOM_NUMBER,
} from '../constants/constant';

class Car {
  #carName;
  #position = 0;

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

  movePosition(randomNumber) {
    if (randomNumber >= RANDOM_NUMBER.minNumber) {
      this.#position++;
    }
  }

  getResult() {
    const dash = '-'.repeat(this.#position);
    return `${this.#carName} : ${dash}`;
  }
}

export default Car;
