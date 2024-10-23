import {
  MINUS_NUMBER_MESSAGE,
  NOT_NUMBER_MESSAGE,
  ONE_CAR_MESSAGE,
  WRONG_SEPARATOR_MESSAGE,
  ZERO_NUMBER_MESSAGE,
} from "./constants/errorMessage.js";

export const validateCarNameList = (carNameList) => {
  const WRONG_PATTERN = /[^A-Za-z,]/g;

  const wrongPattern = carNameList.match(WRONG_PATTERN);
  if (wrongPattern) {
    throw new Error(WRONG_SEPARATOR_MESSAGE);
  }

  if (carNameList.split(",").length === 1) {
    throw new Error(ONE_CAR_MESSAGE);
  }
};

export const validateTryCount = (tryCount) => {
  if (tryCount === 0) {
    throw new Error(ZERO_NUMBER_MESSAGE);
  }

  if (tryCount < 0) {
    throw new Error(MINUS_NUMBER_MESSAGE);
  }

  if (isNaN(Number(tryCount))) {
    throw new Error(NOT_NUMBER_MESSAGE);
  }
};
