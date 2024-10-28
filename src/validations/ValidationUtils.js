import {
  WHITESPACE_REGEX,
  VALIDATION_ERROR_MESSAGE,
} from '../constants/constants.js';

const isNotEmpty = (input) => {
  if (input === null || input === undefined || input === '') {
    throw new Error(VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE);
  }
  return input;
};

const hasNoWhitespace = (input) => {
  if (WHITESPACE_REGEX.test(input)) {
    throw new Error(VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE);
  }
  return input;
};

const matchesRegex = (regex, input) => {
  if (!regex.test(input)) {
    throw new Error(VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT);
  }
  return input;
};

const isWithinRange = (min, max, value, errorMessage) => {
  if (value < min || value > max) {
    throw new Error(errorMessage);
  }
  return value;
};

const isPositiveInteger = (input) => {
  const number = Number(input);
  if (Number.isNaN(number) || !Number.isInteger(number) || number <= 0) {
    throw new Error(VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
  }
  return number;
};

const hasNoDuplicates = (array) => {
  if (new Set(array).size !== array.length) {
    throw new Error(VALIDATION_ERROR_MESSAGE.DUPLICATED_NAME);
  }
  return array;
};

/**
 * 여러 유효성 검사기를 결합하여 입력 값을 검증합니다.
 *
 * @param {...Function} validators - 입력 값을 검증할 함수들.
 * @returns {Function} 입력 값을 받아서 검증을 수행하는 함수.
 */
const composeValidators =
  (...validators) =>
  (input) =>
    validators.reduce((value, validator) => validator(value), input);

export {
  isNotEmpty,
  hasNoWhitespace,
  matchesRegex,
  isWithinRange,
  isPositiveInteger,
  composeValidators,
  hasNoDuplicates,
};
