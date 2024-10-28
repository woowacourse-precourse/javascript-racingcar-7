import { ATTEMPT, ERROR_MESSAGE } from "../constants/error.js";
import { isNumber } from "./validators.js";

export const attemptValidator = (count) => {
  if (count == "") {
    throw new Error(ERROR_MESSAGE + ATTEMPT.EMPTY_TRY);
  }

  if (!isNumber(Number(count))) {
    throw new Error(ERROR_MESSAGE + ATTEMPT.NOT_NUMBER);
  }

  return Number(count);
};
