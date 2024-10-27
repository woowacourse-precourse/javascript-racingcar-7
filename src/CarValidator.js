import ERROR_MESSAGES from './constants/errorMessages.js';

class CarValidator {
  static #splitString(inputString) {
    return inputString.split(',');
  }

  static #isEmptyCarName(cars) {
    if (cars.some((car) => car === '')) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
  }

  static #containWhitespaceInCarName(cars) {
    if (cars.some((car) => car.includes(' '))) {
      throw new Error(ERROR_MESSAGES.CONTAINS_WHITESPACE);
    }
  }

  static #isLessThanTwoCars(cars) {
    if (cars.length < 2) {
      throw new Error(ERROR_MESSAGES.LESS_THAN_TWO_CARS);
    }
  }

  static #hasDuplicateCarName(cars) {
    const uniqueCars = new Set(cars);
    if (uniqueCars.size < cars.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
  }

  static #isCarNameTooLong(cars) {
    if (cars.some((car) => car.length > 5)) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
    }
  }

  static validateCars(inputString) {
    const cars = this.#splitString(inputString);

    this.#isEmptyCarName(cars);
    this.#containWhitespaceInCarName(cars);
    this.#isLessThanTwoCars(cars);
    this.#hasDuplicateCarName(cars);
    this.#isCarNameTooLong(cars);

    return cars;
  }
}

export default CarValidator;
