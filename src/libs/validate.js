import { ERROR_MESSAGE } from "./constants.js";

export function validateRacerAmount(racerAmount) {
  if (racerAmount <= 1) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_AMOUNT);
  }
}
export function validateCarNameLength(name) {
  if (name.length < 1 || name.length > 5) {
    throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  }
}
