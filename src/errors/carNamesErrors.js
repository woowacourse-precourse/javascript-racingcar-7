import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const isCarNamesInputNotEmpty = carNamesInput => {
  if (carNamesInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

export { isCarNamesInputNotEmpty };
