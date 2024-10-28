import {
  CARNAME_MIN_LENGTH,
  CARNAME_MAX_LENGTH,
  ERROR_MESSAGES,
} from "./constants";

const createError = (message) => {
  throw new Error(message);
};

export function checkForDuplicates(carNames) {
  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size !== carNames.length) {
    createError(ERROR_MESSAGES.DUPLICATE_NAMES);
  }

  return true;
}

// 자동차 이름 길이 수 체크
export const isValidLength = (target, min, max) => {
  return min <= target.length && target.length <= max;
};

// 자동차 이름 길이 유효성 검사
export const hasInvalidCarNameLength = (carNames) => {
  if (
    carNames.some(
      (carName) =>
        !isValidLength(carName, CARNAME_MIN_LENGTH, CARNAME_MAX_LENGTH)
    )
  ) {
    createError(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  }
};

export const isPositiveInteger = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    createError(ERROR_MESSAGES.INVALID_POSITIVE_INTEGER);
  }
};
