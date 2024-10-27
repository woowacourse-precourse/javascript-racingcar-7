import { ERROR_MESSAGE } from "./message.js";

export function validateCarNames(names) {
  names.forEach(name => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH_EXCEED);
    }
  });
}


export function validateCount(count) {
  if (isNaN(count)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  if (!Number.isInteger(Number(count))) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  if (count = 0) throw new Error(ERROR_MESSAGE.NUM_IS_ZERO);
  if (count < 0) throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
}
