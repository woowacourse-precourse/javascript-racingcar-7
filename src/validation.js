import {
  MAX_NAME_MESSAGE,
  MINUS_NUMBER_MESSAGE,
  NOT_NUMBER_MESSAGE,
  ONE_CAR_MESSAGE,
  WRONG_SEPARATOR_MESSAGE,
  ZERO_NUMBER_MESSAGE,
} from "./constants/errorMessage.js";

export const validateCarNameList = (carNameListProp) => {
  const WRONG_PATTERN = /[^ㄱ-ㅎ가-힣A-Za-z0-9,]/g;

  const wrongPattern = carNameListProp.match(WRONG_PATTERN);
  if (wrongPattern) {
    throw new Error(WRONG_SEPARATOR_MESSAGE);
  }

  const carNameList = carNameListProp.split(",");

  if (carNameList.length === 1) {
    throw new Error(ONE_CAR_MESSAGE);
  }
  return true;
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
  return true;
};
