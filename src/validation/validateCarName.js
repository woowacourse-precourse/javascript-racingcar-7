import { ERROR_MESSAGES, RULES } from "../constants/index.js";

export const validateCarNames = (carNames) => {
  validateCarNameLength(carNames);
  validateNoEmptyName(carNames);
  validateNoDuplicates(carNames);
};

const validateCarNameLength = (carNames) => {
  if (carNames.some((name) => name.length > RULES.CAR_MAX_LENGTH)) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG);
  }
};

const validateNoEmptyName = (carNames) => {
  if (carNames.some((name) => name === "")) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME);
  }
};

const validateNoDuplicates = (carNames) => {
  if (new Set(carNames).size !== carNames.length) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE);
  }
};
