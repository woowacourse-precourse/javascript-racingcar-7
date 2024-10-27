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
}

