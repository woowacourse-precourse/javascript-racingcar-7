import { ERROR_MESSAGES, throwError } from '../Model/Error.js';
import { checkDuplicate } from '../Util/util.js';
import { consecutiveDelimiterPattern, isNumber } from '../Util/regex.js';

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

// TODO: REFACTOR THIS
function validateRounds(rounds) {
  const number = Number(rounds);
  if (isNaN(number)) {
    throw new Error('[ERROR] 입력은 숫자여야 합니다.');
  }

  // 정수가 아닌 경우
  if (!Number.isInteger(number)) {
    throw new Error('[ERROR] 입력은 정수여야 합니다.');
  }

  // 음수인 경우
  if (number < 0) {
    throw new Error('[ERROR] 입력은 양수여야 합니다.');
  }
  const parsedRounds = parseInt(rounds, 10);
  if (isNaN(parsedRounds) || parsedRounds < 1) {
    throwError(ERROR_MESSAGES.INVALID_INPUT_ROUND);
  }
  return parsedRounds;
}

export { validateCarNames, validateRounds };
