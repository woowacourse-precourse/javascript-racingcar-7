import { ERROR_MESSAGE } from '../constant/index.js';

export const carNameValidate = (carNameArr) => {
  if (carNameArr.some((name) => name === '')) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY);
  }

  if (carNameArr.some((name) => name.split('').find((char) => char === ' '))) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP);
  }

  if (carNameArr.length !== new Set(carNameArr).size) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION);
  }

  if (carNameArr.some((name) => name.length > 5)) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE);
  }
};

export const numberValidate = (tryNumber) => {
  if (Number.isNaN(tryNumber)) {
    throw new Error(ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR);
  }

  if (tryNumber <= 0) {
    throw new Error(ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR);
  }
};
