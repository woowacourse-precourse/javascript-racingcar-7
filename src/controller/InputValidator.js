import {
  CAR_NAME_EMPTY,
  CAR_NAME_LIMIT_LENGTH,
} from '../constants/constraints.js';
import {
  ERROR_ATTEMPT_COUNT_MUST_BE_POSITIVE,
  ERROR_CAR_NAME_LENGTH,
  ERROR_DUPLCIATE_CAR_NAMES,
  ERROR_EMPTY_CAR_NAME,
  ERROR_NO_COMMA,
} from '../constants/errorMessage.js';
import throwError from '../Error/handleError.js';

class InputValidator {
  static validateCarName(names) {
    if (names.some((name) => name.length === CAR_NAME_EMPTY)) {
      throwError(ERROR_EMPTY_CAR_NAME);
    }
    if (names.some((name) => name.length > CAR_NAME_LIMIT_LENGTH)) {
      throwError(ERROR_CAR_NAME_LENGTH);
    }
    const hasDuplicates = names.length !== new Set(names).size;
    if (hasDuplicates) {
      throwError(ERROR_DUPLCIATE_CAR_NAMES);
    }
    if (names.length < 2) {
      throwError(ERROR_NO_COMMA);
    }
  }

  static validateAttemptCount(attemptCount) {
    if (Number.isNaN(Number(attemptCount)) || attemptCount <= 0) {
      throwError(ERROR_ATTEMPT_COUNT_MUST_BE_POSITIVE);
    }
  }
}
export default InputValidator;
