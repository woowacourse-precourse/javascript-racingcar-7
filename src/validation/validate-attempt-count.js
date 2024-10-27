import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
  INVALID_INPUT: '유효한 숫자를 입력해주세요.',
  MINUS_INPUT: '0보다 큰 수를 입력해주세요',
};

const checkForEmptyInput = (attemptCount) => {
  if (!attemptCount) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return attemptCount;
};
const checkValidNumber = (attemptCount) => {
  if (Number.isNaN(attemptCount)) throwError(ERROR_MESSAGES.INVALID_INPUT);
  return attemptCount;
};

const checkMinusNumber = (attemptCount) => {
  if (attemptCount <= 0) throwError(ERROR_MESSAGES.INVALID_INPUT);
  return attemptCount;
};

const validateAttemptCount = (attemptCount) => {
  runValidators([checkValidNumber, checkForEmptyInput, checkMinusNumber], attemptCount);
};

export default validateAttemptCount;
