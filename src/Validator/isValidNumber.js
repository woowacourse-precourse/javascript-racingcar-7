import { ERROR_MESSAGE } from "../Constants/constant.js";
import errorHandler from "../Error/errorHandler.js";

const isNumber = (tryNumber) => {
  return !isNaN(tryNumber);
};

const isNotInteger = (tryNumber) => {
  return !Number.isInteger(tryNumber);
};

const isNotPositive = (tryNumber) => {
  return tryNumber < 0;
};

const isNotZero = (tryNumber) => {
  return tryNumber === 0;
};

const isValidNumber = (tryNumber) => {
  if (!isNumber(tryNumber)) {
    errorHandler(ERROR_MESSAGE.notANumber);
  }
  tryNumber = Number(tryNumber);
  if (isNotInteger(tryNumber)) {
    errorHandler(ERROR_MESSAGE.notAnInteger);
  } else if (isNotPositive(tryNumber)) {
    errorHandler(ERROR_MESSAGE.negativeNumber);
  } else if (isNotZero(tryNumber)) {
    errorHandler(ERROR_MESSAGE.zeroNotAllowed);
  }
  return true;
};
export default isValidNumber;
