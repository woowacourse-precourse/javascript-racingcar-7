import CustomError from './Error.js';
import ERROR_MESSAGES from './constants/error.js';
import { MAX_NAME_LENGTH, NAME_SEPARATOR } from './constants/index.js';

class Validator {
  static validateEmptyUserInput(userInput) {
    if (userInput.trim() === '') {
      throw new CustomError(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static validateMaxRacerName(racer) {
    if (racer.length > MAX_NAME_LENGTH) {
      throw new CustomError(ERROR_MESSAGES.MAX_RACER_NAME);
    }
  }

  static validateSeparator(userInput) {
    if (userInput.split(NAME_SEPARATOR).length < 2) {
      throw new CustomError(ERROR_MESSAGES.INVALIDATE_SEPARATOR);
    }
  }
}

export default Validator;
