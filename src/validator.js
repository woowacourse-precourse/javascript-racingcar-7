import { ERROR_MESSAGE } from './constants.js';

const isOnlySymbolAndNumber = (carName) => {
  const regex = /[가-힣A-Za-z]/;

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

const isNumber = (tryCount) => {
  if (isNaN(tryCount)) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  }
};

const isDecimal = (tryCount) => {
  if (tryCount % 1 !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
  }
};

const isInRange = (tryCount) => {
  if (tryCount < 1 || tryCount > 10) {
    throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
  }
};

const validateTryCount = (tryCount) => {
  const tryCountNumber = Number(tryCount);

  isNumber(tryCountNumber);
  isDecimal(tryCountNumber);
  isInRange(tryCountNumber);
};

export { validateCarNamesInput, validateTryCount };
