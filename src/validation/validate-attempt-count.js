import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  INVALID_INPUT: '유효한 숫자를 입력해주세요.',
  MINUS_INPUT: '0보다 큰 수를 입력해주세요',
};

const checkValidNumber = (attemptCount) => {
  if (Number.isNaN(attemptCount)) throwError(ERROR_MESSAGES.INVALID_INPUT);
  return attemptCount;
};

const checkMinusNumber = (attemptCount) => {
  if (attemptCount <= 0) throwError(ERROR_MESSAGES.MINUS_INPUT);
  return attemptCount;
};

const validateAttemptCount = (attemptCount) => {
  runValidators([checkValidNumber, checkMinusNumber], attemptCount);
};

export default validateAttemptCount;
