import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const carNamesLengthValidator = trimmedEachCarName => {
  return trimmedEachCarName.every(element => element.length < 6);
};

const isCarNamesInputNoEmpty = carNamesInput => {
  if (carNamesInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const isCarNamesInputTypeOfNum = carNameWords => {
  for (let i = 0; i < carNameWords.length; i += 1) {
    if (!isNaN(parseInt(carNameWords[i]))) {
      throw new Error(ERROR_MESSAGES.NOT_STRING);
    }
  }
};

const isCarNamesInputValidatedLength = carNameWords => {
  if (carNamesLengthValidator(carNameWords)) {
    return true;
  }

  if (carNamesLengthValidator(carNameWords) === false) {
    throw new Error(ERROR_MESSAGES.TOO_LONG);
  }
};

export { isCarNamesInputNoEmpty, isCarNamesInputTypeOfNum, isCarNamesInputValidatedLength };
