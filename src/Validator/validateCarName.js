//@ts-check

import { CAR_NAME_ERROR_MESSAGE } from '../constants/messages.js';
import throwError from '../util/errorThrower.js';
import { _pipe } from '../util/util.js';

/**
 * @typedef {function(string[]): string[]} ValidationFunction
 * @param {string[]} carNames
 * @returns {string[]}
 * @throws {Error}
 */
const checkEmpty = (carNames) => {
  if (carNames.length === 0 || carNames.some((name) => name.trim() === '')) {
    throwError(CAR_NAME_ERROR_MESSAGE.NO_INPUT);
  }

  return carNames;
};

/**@type {ValidationFunction} */
const checkCarNameRange = (carNames) => {
  if (carNames.some((car) => car.length > 5))
    throwError(CAR_NAME_ERROR_MESSAGE.OUT_OF_RANGE);

  return carNames;
};

/**@type {ValidationFunction} */
const checkOneCarInput = (carNames) => {
  if (carNames.length === 1) throwError(CAR_NAME_ERROR_MESSAGE.ONE_CAR_NAME);

  return carNames;
};

/**@type {ValidationFunction} */
const checkContainCommaCarName = (carNames) => {
  if (carNames.some((name) => name.trim() === ''))
    throwError(CAR_NAME_ERROR_MESSAGE.CONTAIN_COMMA);

  return carNames;
};

/**@type {ValidationFunction} */
const checkIncludeSpace = (carNames) => {
  if (carNames.some((name) => name.includes(' ')))
    throwError(CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE);

  return carNames;
};

/**@type {ValidationFunction} */
const checkDuplicateCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size)
    throwError(CAR_NAME_ERROR_MESSAGE.DUPLICATE_CAR_NAME);

  return carNames;
};

/**
 * @param {string} input
 * @returns {string[]}
 */
const splitCarNames = (input) => input.split(',');

const validateCarName = _pipe(
  splitCarNames,
  checkEmpty,
  checkCarNameRange,
  checkOneCarInput,
  checkContainCommaCarName,
  checkIncludeSpace,
  checkDuplicateCarName
);

export { validateCarName };
