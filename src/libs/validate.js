import { CONFIG, ERROR_MESSAGE } from "./constants.js";
import { RaceError } from "./customError.js";

export function validateStringType(input) {
  if (typeof input !== "string") {
    throw new RaceError(ERROR_MESSAGE.INVALID_INPUT_TYPE);
  }
  return input;
}

export function validateNumberType(input) {
  const number = Number(input);
  if (Number.isNaN(number)) {
    throw new RaceError(ERROR_MESSAGE.INVALID_INPUT_TYPE);
  }
  return number;
}

export function validateEmptyInput(input) {
  if (!input || input.length === CONFIG.EMPTY_LENGTH || input.trim().length === CONFIG.EMPTY_LENGTH) {
    throw new RaceError(ERROR_MESSAGE.EMPTY_INPUT);
  }
}

export function validateRacerAmount(racerAmount) {
  if (racerAmount <= 1) {
    throw new RaceError(ERROR_MESSAGE.INVALID_CAR_AMOUNT);
  }
}

export function validateCarNameLength(name) {
  if (name.length < CONFIG.MIN_CAR_NAME_LENGTH || name.length > CONFIG.MAX_CAR_NAME_LENGTH) {
    throw new RaceError(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  }
}

export function validateRounds(rounds) {
  if (isNaN(rounds) || rounds < CONFIG.MIN_ROUNDS) {
    throw new RaceError(ERROR_MESSAGE.INVALID_ROUND);
  }
}
