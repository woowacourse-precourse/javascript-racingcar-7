import { ERROR_MESSAGE } from './Message.js';

function validateNoWhiteSpace(carName) {
  if (carName.includes(' ')) throw new Error(`${ERROR_MESSAGE.NO_WHITESPACE}`);
}

function validateOnlyLetters(carName) {
  if (/\d/.test(carName))
    throw new Error(`${ERROR_MESSAGE.INVALID_CHARACTERS}`);
}
