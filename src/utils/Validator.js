import { ERROR_MESSAGES, createError } from '../constants/constants.js';

class Validator {
  static numberOfGamesValidation(input) {
    if (Number.isNaN(input)) {
      throw createError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
    if (input < 0) {
      throw createError(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (!Number.isInteger(input)) {
      throw createError(ERROR_MESSAGES.NOT_INTEGER);
    }
  }

  static carValidation(carArray) {
    if (carArray.length === 1) {
      throw createError(ERROR_MESSAGES.NO_CARS);
    }

    const hasEmptyName = carArray.some(car => !car || car.trim() === '');
    if (hasEmptyName) {
      throw createError(ERROR_MESSAGES.INVALID_COMMA);
    }

    const hasLongName = carArray.some(car => car.length > 5);
    if (hasLongName) {
      throw createError(ERROR_MESSAGES.NAME_TOO_LONG);
    }
  }
}
export default Validator;
