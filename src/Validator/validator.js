//@ts-check

import { CAR_NAME_ERROR_MESSAGE } from '../constants/messages.js';
import throwError from '../util/errorThrower.js';
import { _pipe } from '../util/util.js';

/**
 * @typedef {function(string): string} ValidationFunction
 * @param {string} input
 * @returns {string}
 * @throws {Error}
 */
const checkEmpty = (input) => {
  if (!input) throwError(CAR_NAME_ERROR_MESSAGE.NO_INPUT);

  return input;
};

/**@type {ValidationFunction} */
const checkCarNameRange = (input) => {
  const carNames = input.split(',').some((car) => car.length > 5); //['정안','진','규홍']
  if (carNames) throwError(CAR_NAME_ERROR_MESSAGE.OUT_OF_RANGE);

  return input;
};

/**@type {ValidationFunction} */
const checkOneCarInput = (input) => {
  const carNames = input.split(',');
  console.log('carNames', carNames);
  if (carNames.length === 1) throwError(CAR_NAME_ERROR_MESSAGE.ONE_CAR_NAME);

  return input;
};

/**@type {ValidationFunction} */
const checkContainCommaCarName = (input) => {
  const carNames = input.split(',');
  if (carNames.some((name) => name.trim() === ''))
    throwError(CAR_NAME_ERROR_MESSAGE.CONTAIN_COMMA);

  return input;
};

/**@type {ValidationFunction} */
const checkIncludeComma = (input) => {
  const carNames = input.split(',');
  if (carNames.some((name) => name.includes(' ')))
    throwError(CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE);

  return input;
};

/**@type {ValidationFunction} */
const checkDuplicateCarName = (input) => {
  const carNames = input.split(',');
  if (carNames.length !== new Set(carNames).size)
    throwError(CAR_NAME_ERROR_MESSAGE.DUPLICATE_CAR_NAME);

  return input;
};

const validateInput = _pipe(
  checkEmpty,
  checkCarNameRange,
  checkOneCarInput,
  checkContainCommaCarName,
  checkIncludeComma,
  checkDuplicateCarName
);

export { validateInput };
