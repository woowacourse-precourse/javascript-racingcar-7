import { CAR_ERROR_MESSAGES } from "../constants/errorMessage.js";
import { CONDITIONS } from "../constants/conditon.js";

export const carValidation = (carNames) => {
  checkEmptyCarNames(carNames);
  checkCarNameLength(carNames);
  checkDuplicateCarNames(carNames);
  checkMinimumCarCount(carNames);
};

const checkEmptyCarNames = (carNames) => {
  if (carNames.some((name) => name === CONDITIONS.EMPTY_STRING)) {
    throw new Error(CAR_ERROR_MESSAGES.EMPTY_NAME);
  }
};

const checkCarNameLength = (carNames) => {
  const isInvalidLength = carNames.some(
    (name) => name.length > CONDITIONS.MAX_CAR_NAME_LENGTH
  );
  if (isInvalidLength) {
    throw new Error(CAR_ERROR_MESSAGES.INVALID_LENGTH);
  }
};

const checkDuplicateCarNames = (carNames) => {
  const distinctNames = new Set(carNames);
  if (distinctNames.size !== carNames.length) {
    throw new Error(CAR_ERROR_MESSAGES.DUPLICATE_NAME);
  }
};

const checkMinimumCarCount = (carNames) => {
  if (carNames.length < CONDITIONS.MIN_CAR_COUNT) {
    throw new Error(CAR_ERROR_MESSAGES.MINIMUM_COUNT);
  }
};
