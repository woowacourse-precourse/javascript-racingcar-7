import { ERROR_MESSAGES } from "../constants.js";

export function validateCarNames(names) {
  if (names.some((name) => name === "")) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_EMPTY);
  }

  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });

  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_DUPLICATE);
  }
}

export function parseMoveAttempts(input) {
  const attempts = parseInt(input, 10);
  if (isNaN(attempts) || attempts <= 0) {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_INVALID);
  }
  return attempts;
}
