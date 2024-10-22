import { MAX_COUNT } from '../../constants/count.js';
import { INPUT_ERROR } from '../../constants/errorMessages.js';
import throwError from '../../utils/throwError.js';

const validatePositiveNumber = number => {
  if (isNaN(number)) {
    throwError(INPUT_ERROR.INVALID_NUMBER); // 숫자가 아닐 때
  }

  if (number < 0) {
    throwError(INPUT_ERROR.NEGATIVE_NUMBER); // 음수일 때
  }
};

const validateRange = number => {
  if (number > MAX_COUNT) {
    throwError(INPUT_ERROR.COUNT_TOO_BIG);
  }
};

const validateCount = input => {
  const number = Number(input);

  validatePositiveNumber(number);
  validateRange(number);
};

export default validateCount;
