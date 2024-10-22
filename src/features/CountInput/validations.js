import { INPUT_ERROR } from '../../constants/errorMessages.js';
import throwError from '../../utils/throwError.js';

export const validateNumber = input => {
  if (isNaN(Number(input))) {
    throwError(INPUT_ERROR.INVALID_NUMBER);
  }
};
