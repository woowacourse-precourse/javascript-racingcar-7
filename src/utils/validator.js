import { VALUES } from '../constants/values.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const validator = {
  validateCarNames(carNames) {
    if (!this.validateNameLength(carNames)) throw new Error(ERROR_MESSAGES.invalidNameLength);
    if (!this.validateNotDuplicated(carNames)) throw new Error(ERROR_MESSAGES.duplicatedName);
    if (!this.validateTrim(carNames)) throw new Error(ERROR_MESSAGES.trim);
  },

  validateNameLength(carNames) {
    return carNames.every(
      (car) => car.length >= VALUES.minLength && car.length <= VALUES.maxLength,
    );
  },

  validateNotDuplicated(carNames) {
    return [...new Set(carNames)].length === carNames.length;
  },

  validateTrim(carNames) {
    return carNames.every((car) => car.trim().length === car.length);
  },
  validateTrialCount(trialCount) {
    if (!this.integerGreaterOrEqualToOne(trialCount))
      throw new Error(ERROR_MESSAGES.notPositiveInteger);
  },

  integerGreaterOrEqualToOne(trialCount) {
    return Number.isInteger(trialCount) && trialCount >= 1;
  },
};

export default validator;
