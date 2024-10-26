import { VALUES } from '../constants/values.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const validator = {
  validateCarNames(carNames) {
    if (!this.validateNameLength(carNames)) throw new Error(ERROR_MESSAGES.invalidNameLength);
    if (!this.validateDuplicated(carNames)) throw new Error(ERROR_MESSAGES.duplicatedName);
    if (!this.validateBlank(carNames)) throw new Error(ERROR_MESSAGES.trim);
  },

  validateNameLength(carNames) {
    return carNames.every(
      (car) => car.length >= VALUES.minLength && car.length <= VALUES.maxLength,
    );
  },

  validateDuplicated(carNames) {
    return [...new Set(carNames)].length === carNames.length;
  },

  validateBlank(carNames) {
    return carNames.every((car) => car.trim().length === car.length);
  },
  validateTrialCount(trialCount) {
    if (!Number.isInteger(trialCount) || trialCount < 1)
      throw new Error(ERROR_MESSAGES.notPositiveInteger);
  },
};

export default validator;
