import { ERROR_MESSAGES } from "./constants.js";

function hasEmptyName(names) {
  return names.some((name) => name === "");
}

function hasInvalidSeparator(inputString) {
  return /[^가-힣a-zA-Z0-9,]/.test(inputString);
}

function hasTooLongName(names) {
  return names.some((name) => name.length > 5);
}

function hasNames(names) {
  return new Set(names).size !== names.length;
}

export function validateCarNames(names) {
  if (hasEmptyName(names)) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  const inputString = names.join(",");
  if (hasInvalidSeparator(inputString)) {
    throw new Error(ERROR_MESSAGES.INVALID_SEPARATOR);
  }

  if (hasTooLongName(names)) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  if (hasNames(names)) {
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
