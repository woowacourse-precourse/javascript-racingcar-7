import {
  CAR_NAME_ERROR_MESSAGE,
  ATTEMPT_COUNT_ERROR_MESSAGE,
} from "./Message.js";

const MAX_NAME_LENGTH = 5;

export const validateName = (name) => {
  if (name.length > MAX_NAME_LENGTH) {
    throw new Error(CAR_NAME_ERROR_MESSAGE.carNameTooLong);
  }
  if (name.trim() === "") {
    throw new Error(CAR_NAME_ERROR_MESSAGE.carNameEmpty);
  }
  return name;
};

export const validateUserAttempts = (attempts) => {
  if (attempts.trim() === "") {
    throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE.attemptCountEmpty);
  }
  const FORMAT_ATTEMPT = Number(attempts);
  if (Number.isNaN(FORMAT_ATTEMPT)) {
    throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE.attemptCountNotNumber);
  }

  if (FORMAT_ATTEMPT < 0) {
    throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE.attemptCountNegative);
  }

  return FORMAT_ATTEMPT;
};
