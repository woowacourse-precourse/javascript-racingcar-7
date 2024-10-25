//@ts-check

import { ATTEMPT_ERROR_MESSAGE } from '../constants/messages.js';
import throwError from '../util/errorThrower.js';
import { _pipe } from '../util/util.js';

/**@param {number} input */
const checkEmpty = (input) => {
  if (!input) throwError(ATTEMPT_ERROR_MESSAGE.NO_INPUT);

  return input;
};

/**@param {number} input */
const checkIsNumber = (input) => {
  if (isNaN(input)) throwError(ATTEMPT_ERROR_MESSAGE.NOT_A_NUMBER);

  return input;
};

/**@param {number} input */
const checkAttemptsRange = (input) => {
  if (Number(input) <= 0 || Number(input) > 9)
    throwError(ATTEMPT_ERROR_MESSAGE.OUT_OF_RANGE);

  return input;
};

const validateAttempts = _pipe(checkEmpty, checkIsNumber, checkAttemptsRange);

export { validateAttempts };
