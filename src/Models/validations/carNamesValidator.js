import { ERROR_MESSAGES } from '../../constants/errorMessages.js';

const isCarNamesInputNotEmpty = carNamesInput => {
  if (carNamesInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const carNamesLengthValidator = trimmedEachCarName => {
  return trimmedEachCarName.every(element => element.length < 6);
};

export { isCarNamesInputNotEmpty, carNamesLengthValidator };
