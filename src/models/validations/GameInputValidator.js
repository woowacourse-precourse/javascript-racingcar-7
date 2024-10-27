import ERROR_MESSAGES from '../../constants/constants.js';

const invalidNumber = input => {
  // 입력값이 공백이거나 숫자가 아닌지 확인
  console.log(input);
  if (input.trim() === '' || Number.isNaN(input) || !Number.isInteger(Number(input))) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
};

const isNegative = input => {
  if (Number(input) < 0) {
    throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
  }
};

const gameInputValidator = input => {
  console.log('실행');
  invalidNumber(input);
  isNegative(input);
};

export default gameInputValidator;
