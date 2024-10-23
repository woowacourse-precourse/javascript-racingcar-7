import { ERROR_MESSAGES, throwError } from '../Model/Error';

function validateCarNames(carNames) {
  const carNamesSplit = carNames.split(',');
  if (carNamesSplit.some((name) => name.trim().length > 5)) {
    throwError(ERROR_MESSAGES.NAME_TOO_LONG);
  }
  if (new Set(carNamesSplit).length !== carNamesSplit) {
    throwError(ERROR_MESSAGES.DUPLICATED_NAMES);
  }
  return carNamesSplit;
}

function validateRounds(Rounds) {
  const parsedRounds = parseInt(Rounds, 10);
  if (isNaN(parsedRounds) || parsedRounds < 1) {
    throwError(ERROR_MESSAGES.INVALID_INPUT_ROUND);
  }
  return parsedRounds;
}

export { validateCarNames, validateRounds };
