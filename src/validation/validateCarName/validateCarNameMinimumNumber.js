import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateCarNameMinimumNumber(inputCarNames) {
  const isValid = inputCarNames.length >= 2;
  if (!isValid) throw new Error(ERROR_MESSAGES.MINIMUM_TWO_CARS_REQUIRED);
  return;
}
