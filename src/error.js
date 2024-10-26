import { ERROR_MESSAGE } from "./message.js";

export function validateCarNames(names) {
  names.forEach(name => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH_EXCEED);
    }
  });
}

export function validateCount(count) {
  if (isNaN(count) || count <= 0) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }
}
