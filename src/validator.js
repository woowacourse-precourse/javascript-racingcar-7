import { ERROR_MESSAGES } from "./constants.js";

export function validateCarNames(names) {
  if (names.some((name) => name === "")) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });
}
