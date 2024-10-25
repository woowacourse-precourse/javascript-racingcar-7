import { ERROR_MESSAGES } from '../constants/errorMessages';

class Validator {
  static validateName(nameString) {
    const names = nameString.split(',');

    if (names.length < 2) throw new Error(ERROR_MESSAGES.name.MIN_NAMES);
    if (new Set(names).size !== names.length) throw new Error(ERROR_MESSAGES.name.DUPLICATEED);

    names.some((name) => {
      if (name === '') throw new Error(ERROR_MESSAGES.name.EMPTY);
      if (name.includes(' ')) throw new Error(ERROR_MESSAGES.name.HAS_SPACING);
      if (name.length > 5) throw new Error(ERROR_MESSAGES.name.MAX_LENGTH);
    });

    return names;
  }

  static validateAttempt(attempts) {
    if (attempts < 1) throw new Error(ERROR_MESSAGES.count.MIN_ATTEMPTS);
    if (isNaN(attempts)) throw new Error(ERROR_MESSAGES.count.NOT_NUMBER);
    if (attempts.toString().includes('.')) throw new Error(ERROR_MESSAGES.count.NOT_NATURAL_NUMBER);
    if (attempts.toString().length > 15) throw new Error(ERROR_MESSAGES.count.MAX_LENGTH);

    return attempts;
  }
}

export default Validator;
