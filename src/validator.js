import { ERROR_MESSAGES } from "./constants.js";

export function validateCarNames(names) {
  if (names.some((name) => name === "")) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  const inputString = names.join(",");
  const invalidSeparator = /[^가-힣a-zA-Z0-9,]/.test(inputString);
  if (invalidSeparator) {
    throw new Error(ERROR_MESSAGES.INVALID_SEPARATOR);
  }

  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });

  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.SAME_CAR_NAME);
  }
}

export function validateAttempts(input) {
  const attempts = parseInt(input, 10);
  if (isNaN(attempts) || attempts < 1 || attempts > 9) {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_INVALID);
  }
  return attempts;
}
