import ERROR_MESSAGES from '../../constants/constants.js';

const invalidNumber = input => {
  // 입력값이 공백이거나 숫자가 아닌지 확인
  if (Number(input) === 0 || Number.isNaN(input) || !Number.isInteger(Number(input))) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
};

const isNegative = input => {
  if (Number(input) < 0) {
    throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
  }
};

const noInput = input => {
  if (input.trim() === '') {
    throw new Error(ERROR_MESSAGES.NO_INPUT);
  }
};

const gameInputValidator = input => {
  noInput(input);
  invalidNumber(input);
  isNegative(input);
};

export default gameInputValidator;
