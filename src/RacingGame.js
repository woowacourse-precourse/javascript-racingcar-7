import { ERROR_HEAD, ERROR_DETAILS } from './constants.js';

class RacingGame {
  #cars;

  constructor(carNames) {
    this.#cars = [];

    RacingGame.validateCarNames(carNames);
    RacingGame.ensureCarNamesNotDuplicate(carNames);
  }

  static validateCarNames(carNames) {
    if (!Array.isArray(carNames)) {
      throw new Error(ERROR_DETAILS.CARNAMES_NOT_ARRAY);
    }

    if (carNames.length === 0) {
      throw new Error(ERROR_DETAILS.CARNAMES_EMPTY);
    }

    carNames.forEach((carName) => {
      RacingGame.validateCarName(carName);
    });
  }

  static validateCarName(carName) {
    if (typeof carName !== 'string') {
      throw new Error(ERROR_DETAILS.CARNAME_NOT_STRING);
    }

    if (carName.trim() === '') {
      throw new Error(ERROR_DETAILS.CARNAME_EMPTY);
    }
  }

  static ensureCarNamesNotDuplicate(carNames) {
    if (!Array.isArray(carNames)) {
      throw new Error(ERROR_DETAILS.CARNAMES_NOT_ARRAY);
    }

    const carNamesSet = new Set(carNames);
    if (carNamesSet.size !== carNames.length) {
      throw new Error(ERROR_DETAILS.CARNAMES_DUPLICATE);
    }
  }
}

export default RacingGame;
