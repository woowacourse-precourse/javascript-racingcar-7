import { THRESHOLD } from '../../constants/threshold.js';
import throwError from '../error.js';
import { ERROR } from '../../constants/message.js';

const validateCountType = (count) => {
  if (Number.isNaN(count)) {
    throwError(ERROR.VALID);
  }
};

const validateCountThreshold = (count) => {
  if (count < THRESHOLD.MIN_COUNT) {
    throwError(ERROR.OVER_MIN_COUNT);
  }
};

export const validateCount = (count) => {
  const parsedCount = Number(count);

  validateCountType(parsedCount);
  validateCountThreshold(parsedCount);
}
