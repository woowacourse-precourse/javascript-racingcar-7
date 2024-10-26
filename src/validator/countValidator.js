import ERROR_MESSAGES from "../constants/errorMessages.js";
import emptyInput from "./inputValidator.js";

const validateIsNumber = (value) => {
  if (isNaN(value)) throwError(ERROR_MESSAGES.NOT_NUMBER_TYPE);
  return parseInt(value);
};

const validateIsZero = (value) => {
  if (value === 0) throwError(ERROR_MESSAGES.NUMBER_IS_ZERO);
  return value;
};

const validateIsNonNegative = (value) => {
  if (value < 0) throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
  return value;
};

const validateCount = (input) => {
  emptyInput(input);
  const count = validateIsNumber(input);
  validateIsZero(count);
  validateIsNonNegative(count);

  return count;
};

export default validateCount;
