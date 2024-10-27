import throwError from './throwError.js';
import * as ERROR from '../constants/errorConstants.js';

export function carNameValidator(carNames) {
  if (carNames.length === 1 && carNames[0].length === 0) {
    throwError(ERROR.CAR_ZERO);
  }

  carNames = carNames.map((carName) => carName.trim());

  if (carNames.some((carName) => carName.length === 0)) {
    throwError(ERROR.CAR_NAME_BLANK);
  }

  if (carNames.some((carName) => carName.length > 5)) {
    throwError(ERROR.CAR_NAME_LENGTH);
  }

  return carNames;
}

export function tryCountValidator(tryCount) {
  if (tryCount.length === 0) {
    throwError(ERROR.TRY_COUNT);
  }

  if (isNaN(tryCount)) {
    throwError(ERROR.TRY_COUNT_NUMBER);
  }

  tryCount = Number(tryCount);

  if (!Number.isInteger(tryCount) || tryCount < 1) {
    throwError(ERROR.TRY_COUNT_NUMBER);
  }

  if (tryCount > 100) {
    throwError(ERROR.TRY_COUNT_MAX);
  }

  return tryCount;
}
