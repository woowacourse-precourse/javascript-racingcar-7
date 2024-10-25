import { ERROR_MESSAGE } from './constants.js';

const isOnlySymbolAndNumber = (carName) => {
  const regex = /^[가-힣A-Za-z]+$/;

  if (!regex.test(carName)) {
    throw new Error(ERROR_MESSAGE.ONLY_SYMBOL_AND_NUMBER);
  }
};

const isCarsLessThanTwo = (carNamesInput) => {
  if (!carNamesInput.includes(',')) {
    throw new Error(ERROR_MESSAGE.CARS_LESS_THAN_TWO);
  }
};

const isValidNameLength = (carName) => {
  if (carName.length > 5 || carName.length < 2) {
    throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  }
};

const isDuplicateExist = (carNames) => {
  const carNamesSet = new Set(carNames);

  if (carNamesSet.size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
  }
};

const validateCarNamesInput = (carNamesInput) => {
  isCarsLessThanTwo(carNamesInput);

  const carNames = carNamesInput.split(',');
  isDuplicateExist(carNames);

  carNames.forEach((carName) => {
    isValidNameLength(carName);
    isOnlySymbolAndNumber(carName);
  });
};

export { validateCarNamesInput };
