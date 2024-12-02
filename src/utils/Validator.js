import MESSAGE from '../constants/Message.js';

export const InputValidator = {
  isEmpty: (input) => {
    if (input === null || input.trim().length === 0 || !input) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
  isMaxLength: (input) => {
    if (input.length > 5) {
      throw new Error(MESSAGE.ERROR.IS_MAX_LENGTH);
    }
  },
  isMaxTryNumber: (input) => {
    if (input >= 10000) {
      throw new Error(MESSAGE.ERROR.IS_MAX_TRY);
    }
  },
  isNaturalNumber: (input) => {
    if (input <= 0 || !Number.isInteger(input) || isNaN(Number(input))) {
      throw new Error(MESSAGE.ERROR.NOT_NATURAL_NUMBER);
    }
  },
};
