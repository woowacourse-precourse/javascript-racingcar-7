import { ERROR_MESSAGE } from "./constants.js";
import { RaceError } from "./customError.js";

export function validateRacerAmount(racerAmount) {
  if (racerAmount <= 1) {
    throw new RaceError(ERROR_MESSAGE.INVALID_CAR_AMOUNT);
  }
}
export function validateCarNameLength(name) {
  if (name.length < 1 || name.length > 5) {
    throw new RaceError(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  }
}
export function validateRounds(rounds) {
  if (isNaN(rounds) || rounds < 1) {
    throw new RaceError(ERROR_MESSAGE.INVALID_ROUND);
  }
}
