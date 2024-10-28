import { ERROR_MESSAGE } from "./constants/Message.js";

export class CarValidator {
  static #validateUnique(carNames) {
    const noDuplicateCarNames = new Set(carNames);
    if (carNames.length !== noDuplicateCarNames.size) {
      throw new Error(ERROR_MESSAGE.UNIQUE_CAR_NAMES);
    }
  }

  static #validateLength(carNames) {
    const isValidLength = carNames.some(
      (car) => car.length < 1 || car.length > 5
    );

    if (isValidLength) throw new Error(ERROR_MESSAGE.INVALID_NAMES_LENGTH);
  }

  static validate(inputCars) {
    const carNames = inputCars.split(",").map((name) => name.trim());
    this.#validateUnique(carNames);
    this.#validateLength(carNames);
  }
}

export class PlayValidator {
  static #isPositiveNum(playCount) {
    if (playCount <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_POSITIVE_NUM);
    }
  }

  static #isNumber(playCount) {
    if (typeof playCount !== "number" || isNaN(playCount)) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT_TYPE);
    }
  }

  static validate(playCount) {
    const parsedPlayCount = Number(playCount);

    this.#isNumber(parsedPlayCount);
    this.#isPositiveNum(parsedPlayCount);
  }
}
