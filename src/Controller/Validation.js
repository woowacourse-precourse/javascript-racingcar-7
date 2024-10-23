import { ERROR_MESSAGES, throwError } from '../Model/Error.js';
import { checkDuplicate } from '../Util/Util.js';
import { consecutiveDelimiterPattern, isNumber } from '../Util/Regex.js';

function validateCarNames(carNames) {
  if (consecutiveDelimiterPattern.test(carNames)) {
    throwError(ERROR_MESSAGES.CONSECUTIVE_DELIMITERS);
  }

  const carNamesSplit = carNames.split(',').map((name) => name.trim());

  if (carNamesSplit.some((name) => name === '')) {
    throwError(ERROR_MESSAGES.EMPTY_NAME);
  }

  if (carNamesSplit.some((name) => name.length > 5)) {
    throwError(ERROR_MESSAGES.NAME_TOO_LONG);
  }

  if (checkDuplicate(carNamesSplit)) {
    throwError(ERROR_MESSAGES.DUPLICATED_NAMES);
  }

  return carNamesSplit;
}

function validateRounds(rounds) {
  if (!isNumber.test(rounds)) {
    throwError(ERROR_MESSAGES.ONLY_POSITIVE_INTEGER_ALLOWED);
  }
  const parsedRounds = parseInt(rounds, 10);
  if (isNaN(parsedRounds) || parsedRounds < 1) {
    throwError(ERROR_MESSAGES.INVALID_INPUT_ROUND);
  }
  return parsedRounds;
}

export { validateCarNames, validateRounds };
