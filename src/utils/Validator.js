import {
  ERROR_MESSAGES,
  createError,
  GAME_CONSTANTS,
} from '../constants/constants.js';

class Validator {
  static numberOfGamesValidation(input) {
    const NumberOfGames = parseFloat(input);

    if (Number.isNaN(NumberOfGames)) {
      throw createError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
    if (NumberOfGames < 0) {
      throw createError(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (!Number.isInteger(NumberOfGames)) {
      throw createError(ERROR_MESSAGES.NOT_INTEGER);
    }
    return NumberOfGames;
  }

  static carValidation(carArray) {
    if (carArray.length === 1) {
      throw createError(ERROR_MESSAGES.NO_CARS);
    }

    const hasEmptyName = carArray.some(car => !car || car.trim() === '');
    if (hasEmptyName) {
      throw createError(ERROR_MESSAGES.INVALID_COMMA);
    }

    const hasLongName = carArray.some(
      car => car.length > GAME_CONSTANTS.CAR_NAME.MAX_LENGTH,
    );
    if (hasLongName) {
      throw createError(ERROR_MESSAGES.NAME_TOO_LONG);
    }
  }
}
export default Validator;
