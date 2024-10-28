import { SYMBOLS } from '../constants/Symbol.js';

export function parseCarNames(userInputCarNames) {
  return userInputCarNames
    .split(SYMBOLS.CAR_DELIMITER)
    .map(carName => carName.trim());
}

export function parseAttempt(userInputAttempt) {
  return Number(userInputAttempt.trim());
}
