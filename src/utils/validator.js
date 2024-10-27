import throwError from './throwError.js';
import * as ERROR from '../constants/errorConstants.js';
import { MAX_CAR_NAME_LENGTH, MAX_TRY_COUNT, MIN_TRY_COUNT } from '../constants/numberConstants.js';

export function carNameValidator(carNames) {
  if (carNames.length === 1 && carNames[0].length === 0) {
    throwError(ERROR.CAR_ZERO);
  }

  carNames = carNames.map((carName) => carName.trim());

  if (carNames.some((carName) => carName.length === 0)) {
    throwError(ERROR.CAR_NAME_BLANK);
  }

  if (carNames.some((carName) => carName.length > MAX_CAR_NAME_LENGTH)) {
    throwError(ERROR.CAR_NAME_LENGTH);
  }

  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size !== carNames.length) {
    throwError(ERROR.CAR_NAME_DUPLICATE);
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

  if (!Number.isInteger(tryCount) || tryCount < MIN_TRY_COUNT) {
    throwError(ERROR.TRY_COUNT_NUMBER);
  }

  if (tryCount > MAX_TRY_COUNT) {
    throwError(ERROR.TRY_COUNT_MAX);
  }

  return tryCount;
}
