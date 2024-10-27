import ERROR_MESSAGES from './constants/errorMessages.js';
import handleError from './utils/handleError.js';

class CarValidator {
  constructor(inputString) {
    this.string = inputString;
    this.cars = [];
  }

  #splitString() {
    this.cars = this.string.split(',');
  }

  #isEmptyCarName() {
    if (this.cars.some((car) => car === '')) {
      handleError(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
  }

  #containWhitespaceInCarName() {
    if (this.cars.some((car) => car.includes(' '))) {
      handleError(ERROR_MESSAGES.CONTAINS_WHITESPACE);
    }
  }

  #isLessThanTwoCar() {
    if (this.cars.length < 2) {
      handleError(ERROR_MESSAGES.LESS_THAN_TWO_CARS);
    }
  }

  #hasDuplicateCarName() {
    const uniqueCars = new Set(this.cars);
    if (uniqueCars.size < this.cars.length) {
      handleError(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
  }

  #isCarNameTooLong() {
    if (this.cars.some((car) => car.length > 5)) {
      handleError(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
    }
  }

  validateCars() {
    this.#splitString();
    this.#isEmptyCarName();
    this.#containWhitespaceInCarName();
    this.#isLessThanTwoCar();
    this.#hasDuplicateCarName();
    this.#isCarNameTooLong();

    return this.cars;
  }
}

export default CarValidator;
