import ERROR_MESSAGE from "./constants/errorMessage.js";

export const validateCarNameList = (carNameListProp) => {
  const WRONG_PATTERN = /[^ㄱ-ㅎ가-힣A-Za-z,]/g;

  const wrongPattern = carNameListProp.match(WRONG_PATTERN);
  if (wrongPattern) {
    throw new Error(ERROR_MESSAGE.WRONG_SEPARATOR);
  }

  const carNameList = carNameListProp.split(",");

  if (carNameList.length === 1) {
    throw new Error(ERROR_MESSAGE.ONE_CAR);
  }

  if (carNameList.length !== new Set(carNameList).size) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
  }
  return true;
};

export const validateTryCount = (tryCount) => {
  if (Number(tryCount) === 0) {
    throw new Error(ERROR_MESSAGE.ZERO_NUMBER);
  }

  if (Number(tryCount) < 0) {
    throw new Error(ERROR_MESSAGE.MINUS_NUMBER);
  }

  if (isNaN(Number(tryCount))) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }
  return true;
};
