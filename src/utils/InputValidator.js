import MESSAGES from "../utils/message.js";

const InputValidator = {
  isEmpty: (input) => {
    if (!input || input.trim().length === 0 || input === null) {
      throw new Error(MESSAGES.ERROR.EMPTY_INPUT);
    }
  },

  isNameLength: (inputArray) => {
    const tooLongName = inputArray.some((item) => [...item].length > 5);

    if (tooLongName) {
      throw new Error(MESSAGES.ERROR.MAX_NAME_LENGTH);
    }
  },

  isNotInteger: (input) => {
    const parsed = Number(input);
    if (!Number.isInteger(parsed)) {
      throw new Error(MESSAGES.ERROR.NOT_INTEGER);
    }
  },

  isMaxValue: (value, max) => {
    if (value > max) {
      throw new Error(MESSAGES.ERROR.MAX_TRY);
    }
  },
};

export default InputValidator;
