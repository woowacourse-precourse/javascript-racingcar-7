import { ERROR_MESSAGE } from './Message.js';

function validateNoWhiteSpace(carName) {
  if (carName.includes(' ')) throw new Error(`${ERROR_MESSAGE.NO_WHITESPACE}`);
}

function validateOnlyLetters(carName) {
  if (/\d/.test(carName))
    throw new Error(`${ERROR_MESSAGE.INVALID_CHARACTERS}`);
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
