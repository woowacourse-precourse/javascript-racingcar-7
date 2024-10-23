import { ERROR_MESSAGES } from '../constants/errors.js';

class Validator {
  static validateCarNames(names) {
    names.split(',').map((name) => {
      const trimedName = name.trim();
      this.validateEmptyCarName(trimedName);
    });
  }

  static validateEmptyCarName(name) {
    if (name === '') {
      throw new Error(ERROR_MESSAGES.INVALID_EMPTY_CARNAME);
    }
  }

  static validateGameCount(input) {
    const gameCount = Number(input);

    if (isNaN(gameCount)) {
      throw new Error(ERROR_MESSAGES.INVALID_GAME_COUNT_TYPE);
    }

    if (gameCount < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_GAME_COUNT);
    }
  }
}

export default Validator;
