// @ts-check
import {
  isIntegerNumericString,
  isLengthLessThan,
  isNotEmptyString,
  isNumericString,
  isPositiveNumericString,
} from '../lib/utils.js';
import Validator from '../lib/Validator.js';

import { CarModel } from '../car/car.model.js';

export class RacingModel {
  /** @type {Array<CarModel>} */
  #cars;

  /** @type {number} */
  #trialNumber;

  static ERROR_MESSAGE = Object.freeze({
    INPUT_CAN_NOT_BE_EMPTY: '[ERROR] 빈 값은 입력할 수 없어요',
    CAR_NAME_LENGTH_IS_LESS_THAN_FIVE: '[ERROR] 자동차 이름은 5자 이하만 가능해요',
    TRIAL_NUMBER_IS_POSITIVE_INTEGER: '[ERROR] 시도할 횟수는 양의 정수만 입력할 수 있어요',
  });

  /**
   *
   * @param {string} input
   * @returns {boolean}
   */
  #isNotEmpty(input) {
    return isNotEmptyString(input);
  }

  /**
   *
   * @param {string} carName
   * @returns {boolean}
   */
  #isCarNameLengthLessThanFive(carName) {
    return isLengthLessThan(carName, 5);
  }

  /**
   *
   * @param {string} input
   * @throws {Error}
    }
   */
  #validateInput(input) {
    new Validator()
      .validate(input)
      .with(this.#isNotEmpty, { message: RacingModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY });
  }

  /**
   *
   * @param {string} carName
   * @throws {Error}
   */
  #validateCarName(carName) {
    new Validator().validate(carName).with(this.#isCarNameLengthLessThanFive, {
      message: RacingModel.ERROR_MESSAGE.CAR_NAME_LENGTH_IS_LESS_THAN_FIVE,
    });
  }

  /**
   *
   * @param {Array<string>} carNames
   * @throws {Error}
   */
  #validateCarNames(carNames) {
    carNames.forEach((carName) => this.#validateCarName(carName));
  }

  /**
   *
   * @param {string} carNames
   * @returns {Array<string>}
   */
  #parseCarNames(carNames) {
    return carNames
      .split(',')
      .filter((carName) => carName !== '')
      .map((carName) => carName.trim());
  }

  /**
   *
   * @param {string} carNames
   * @throws {Error}
   */
  #validateCars(carNames) {
    this.#validateInput(carNames);
    this.#validateCarNames(this.#parseCarNames(carNames));
  }

  /**
   *
   * @param {Array<string>} cars
   * @returns {Array<CarModel>}
   */
  #createCars(cars) {
    return cars.map((car) => new CarModel(car));
  }

  /**
   *
   * @param {string} carNames
   */
  setCars(carNames) {
    this.#validateCars(carNames);

    this.#cars = this.#createCars(this.#parseCarNames(carNames));
  }

  /**
   *
   * @param {string} trialNumber
   * @returns {boolean}
   */
  #isPositiveInteger(trialNumber) {
    return (
      isNumericString(trialNumber) &&
      isIntegerNumericString(trialNumber) &&
      isPositiveNumericString(trialNumber)
    );
  }

  /**
   *
   * @param {string} trialNumber
   * @throws {Error}
   */
  #validateTrialNumber(trialNumber) {
    new Validator()
      .validate(trialNumber)
      .with(this.#isNotEmpty, { message: RacingModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY })
      .with(this.#isPositiveInteger, {
        message: RacingModel.ERROR_MESSAGE.TRIAL_NUMBER_IS_POSITIVE_INTEGER,
      });
  }

  /**
   *
   * @param {string} trialNumber
   */
  setTrialNumber(trialNumber) {
    this.#validateTrialNumber(trialNumber);

    this.#trialNumber = Number(trialNumber);
  }
}
