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
};
