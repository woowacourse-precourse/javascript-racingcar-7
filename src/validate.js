import { ERROR_MESSAGE } from "./message.js";
import REGEX from "./regex.js";
import { isCarNameLengthOver, regularExpressionCheck } from './util/util.js';

export const validateCars = {
  validation: (cars) => {
    validateCars.carsNoEntered(cars);
    validateCars.delimiterStartEndEntered(cars);
    validateCars.delimiterTwice(cars);
    validateCars.eachCarNameLengthOver(cars);
  },
  carsNoEntered(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGE.CARS_NO_ENTERED);
    }
  },
  eachCarNameLengthOver(value) {
    if (isCarNameLengthOver(value)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
  },
  delimiterTwice(value) {
    if (regularExpressionCheck(value, REGEX.CONSECUTIVE_DELIMITERS)) {
      throw new Error(ERROR_MESSAGE.DELIMITER_TWICE);
    }
  },
  delimiterStartEndEntered(value) {
    if (
      regularExpressionCheck(value, REGEX.DELIMITER_START_OR_END)
    ) {
      throw new Error(ERROR_MESSAGE.DELIMITER_START_OR_END_ENTERED);
    }
  },
};

export const validateCount = {
  validation: (count) => {
    validateCount.countNoEntered(count);
    validateCount.countCharEntered(count);
    validateCount.countPointEntered(count);
    validateCount.countNegativeEntered(count);
  },
  countNoEntered(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGE.COUNT_NO_ENTERED);
    }
  },
  countCharEntered(value) {
    if (isNaN(+value)) {
      throw new Error(ERROR_MESSAGE.COUNT_CHAR_ENTERED);
    }
  },
  countPointEntered(value) {
    if (regularExpressionCheck(+value, REGEX.POINT_NUMBER)) {
      throw new Error(ERROR_MESSAGE.COUNT_POINT);
    }
  },
  countNegativeEntered(value) {
    if (!regularExpressionCheck(+value, REGEX.POSITIVE_NUMBER)) {
      throw new Error(ERROR_MESSAGE.COUNT_NEGATIVE);
    }
  },
};

export const validateWinner = (winners) => {
  if (winners.length === 0) {
    throw new Error(ERROR_MESSAGE.NO_CHAMPION);
  }
};