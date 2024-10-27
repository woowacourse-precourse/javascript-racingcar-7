import { ERROR_MESSAGES, CONSTANTS } from "./constants.js";

export function validatePlayerNames(names) {
  if (names.length === 0 || names.every((name) => name.trim() === "")) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
  if (names.some((name) => name.length > CONSTANTS.MAX_NAME_LENGTH)) {
    throw new Error(ERROR_MESSAGES.NAME_LENGTH(CONSTANTS.MAX_NAME_LENGTH));
  }
  const checkDuplicateNames = new Set(names);
  if (checkDuplicateNames.size !== names.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
  }

  return true;
}

export function validateTrials(trials) {
  if (Number.isNaN(Number(trials)) || trials < 1 || trials.includes(".")) {
    throw new Error(ERROR_MESSAGES.TRIALS_NUMBER);
  }
  return true;
}
