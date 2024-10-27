import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
  INVALID_INPUT: '숫자가 아닌 입력입니다.',
};

const checkForEmptyInput = (attemptCount) => {
  if (!attemptCount) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return attemptCount;
};
const checkValidNumber = (attemptCount) => {
  if (Number.isNaN(attemptCount)) throwError(ERROR_MESSAGES.INVALID_INPUT);
  return attemptCount;
};

const validateAttemptCount = (attemptCount) => {
  runValidators([checkValidNumber, checkForEmptyInput], attemptCount);
};

export default validateAttemptCount;
