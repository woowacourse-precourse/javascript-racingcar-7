import { ERROR_MESSAGES } from '../constants/errorMessages';

class Validator {
  static rules = {
    isShorterThanTwo: (str) => str.length < 2,
    hasDuplication: (str) => new Set(str).size !== str.length,
    isEmpty: (str) => str === '',
    hasSpacing: (str) => str.includes(' '),
    isLongerThanFive: (str) => str.length > 5,
    isNotNaturalNumber: (number) => number.toString().includes('.'),
    isNotNumber: (number) => !Number.isInteger(number),
    isLessThanOne: (number) => number < 1,
    exceedsMaxDigits: (number) => number.toString().length > 15,
  };

  static validateName(nameString) {
    const names = nameString.split(',');

    if (this.rules.isShorterThanTwo(names)) throw new Error(ERROR_MESSAGES.name.MIN_NAMES);
    if (this.rules.hasDuplication(names)) throw new Error(ERROR_MESSAGES.name.DUPLICATEED);

    names.forEach((name) => {
      if (this.rules.isEmpty(name)) throw new Error(ERROR_MESSAGES.name.EMPTY);
      if (this.rules.hasSpacing(name)) throw new Error(ERROR_MESSAGES.name.HAS_SPACING);
      if (this.rules.isLongerThanFive(name)) throw new Error(ERROR_MESSAGES.name.MAX_LENGTH);
    });

    return names;
  }

  static validateAttempt(attempts) {
    if (this.rules.isNotNaturalNumber(attempts)) throw new Error(ERROR_MESSAGES.count.NOT_NATURAL_NUMBER);
    if (this.rules.isNotNumber(attempts)) throw new Error(ERROR_MESSAGES.count.NOT_NUMBER);
    if (this.rules.isLessThanOne(attempts)) throw new Error(ERROR_MESSAGES.count.MIN_ATTEMPTS);
    if (this.rules.exceedsMaxDigits(attempts)) throw new Error(ERROR_MESSAGES.count.MAX_LENGTH);

    return attempts;
  }
}

export default Validator;
