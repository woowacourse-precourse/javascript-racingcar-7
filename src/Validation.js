import { ERROR_MESSAGE } from './constants/message.js';

const NUMBER_REGEX = /^[1-9]\d*$/;
const NAME_REGEX = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

const validateInputBlank = (input) => {
  if (
    input === null ||
    input === undefined ||
    input === '' ||
    input.includes(' ')
  ) {
    throw new Error(ERROR_MESSAGE.blank);
  }
};

const validateInputSpecialCharacter = (input) => {
  if (NAME_REGEX.test(input) == true) {
    throw new Error(ERROR_MESSAGE.special);
  }
};

const validateCarNameOverlap = (input) => {
  if (new Set(input).size !== input.length) {
    throw new Error(ERROR_MESSAGE.carName.invalidName);
  }
};

const validateCarNameLength = (input) => {
  if (input.length > 5) {
    throw new Error(ERROR_MESSAGE.carName.invalidLength);
  }
};

const validateRacingCountType = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(ERROR_MESSAGE.attemptNumber.invalidType);
  }
};

const validateRacingCountNumber = (input) => {
  if (!NUMBER_REGEX.test(input)) {
    throw new Error(ERROR_MESSAGE.attemptNumber.invalidInteger);
  }
};

const validateRacingCarSeparator = (input) => {
  if (input.indexOf(',') == -1) {
    throw new Error(ERROR_MESSAGE.carName.invalidSeparator);
  }
};

export {
  validateInputBlank,
  validateCarNameOverlap,
  validateCarNameLength,
  validateRacingCountType,
  validateRacingCountNumber,
  validateRacingCarSeparator,
  validateInputSpecialCharacter,
};
