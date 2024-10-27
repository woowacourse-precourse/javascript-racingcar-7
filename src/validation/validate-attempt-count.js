import throwError from '../util/throw-error.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
};

const checkForEmptyInput = (input) => {
  if (!input) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return input;
};

const validateAttemptCount = (input) => {
  checkForEmptyInput(input);
  // runValidators([checkNameLengthLimit], carNameList);
};

export default validateAttemptCount;
