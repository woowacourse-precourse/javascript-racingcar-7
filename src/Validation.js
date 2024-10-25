import { ERROR_MESSAGE } from './Message.js';

export function validateAllCarNames(carNameArray) {
  carNameArray.forEach((carName) => {
    validateCarName(carName);
  });
}

function validateCarName(carName) {
  try {
    validateNoWhiteSpace(carName);
    validateNoNumber(carName);
    validateNoSpecialCharacters(carName);
    validateMaxFiveChars(carName);
  } catch (err) {
    throw new Error(`[ERROR] ${err.message}`);
  }
}

function validateNoWhiteSpace(carName) {
  if (carName.includes(' ')) throw new Error(`${ERROR_MESSAGE.NO_WHITESPACE}`);
}

function validateNoNumber(carName) {
  if (/\d/.test(carName))
    throw new Error(`${ERROR_MESSAGE.INVALID_NUMERIC_CHARACTERS}`);
}

function validateNoSpecialCharacters(carName) {
  if (/[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(carName))
    throw new Error(`${ERROR_MESSAGE.INVALID_SPECIAL_CHARACTERS}`);
}

function validateMaxFiveChars(carName) {
  if (carName.length > 5)
    throw new Error(`${ERROR_MESSAGE.MAX_LENGTH_EXCEEDED}`);
}

export function validatePositiveNumber(numberOfMove) {
  if (
    !Number.isInteger(numberOfMove) ||
    isNaN(numberOfMove) ||
    numberOfMove < 1
  )
    throw new Error(`${ERROR_MESSAGE.NON_POSITIVE_NUMBER}`);
}
