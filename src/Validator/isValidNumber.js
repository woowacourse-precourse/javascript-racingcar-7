import { ERROR_MESSAGE } from "../Constants/constant.js";
import errorHandler from "../Error/errorHandler.js";

const isNumber = (tryNumber) => {
  return !isNaN(tryNumber);
};

const isNotInteger = (tryNumber) => {
  return !Number.isInteger(tryNumber);
};

const isNotPositive = (tryNumber) => {
  return tryNumber < 1;
};

const isNotZero = (tryNumber) => {
  return tryNumber === 0;
};

const isValidNumber = (tryNumber) => {
  if (!isNumber(tryNumber)) {
    errorHandler(ERROR_MESSAGE.notANumber);
  }
  if (isNotInteger(tryNumber)) {
    errorHandler(ERROR_MESSAGE.notAnInteger);
  }
  if (isNotPositive(tryNumber)) {
    errorHandler(ERROR_MESSAGE.negativeNumber);
  }
  if (isNotZero(tryNumber)) {
    errorHandler(ERROR_MESSAGE.zeroNotAllowed);
  }
  return true;
};
export default isValidNumber;
