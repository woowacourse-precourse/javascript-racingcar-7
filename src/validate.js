import { ERROR_MESSAGE } from "./message";
import REGEX from "./regex";
import { isCarNameLengthOver, regularExpressionCheck } from './util/util.js';

export const validateCars = {
  validation(cars) {
    this.CarsNoEntered(cars);
    this.DelimiterStartEndEntered(cars);
    this.DelimiterTwice(cars);
    this.EachCarNameLengthOver(cars);
  },
  CarsNoEntered(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGE.CARS_NO_ENTERED);
    }
  },
  EachCarNameLengthOver(value) {
    if (isCarNameLengthOver(value)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
  },
  DelimiterTwice(value) {
    if (!regularExpressionCheck(value, REGEX.CONSECUTIVE_DELIMITERS)) {
      throw new Error(ERROR_MESSAGE.DELIMITER_TWICE);
    }
  },
  DelimiterStartEndEntered(value) {
    if (
      !regularExpressionCheck(value, REGEX.DELIMITER_START_OR_END)
    ) {
      throw new Error(ERROR_MESSAGE.DELIMITER_START_OR_END_ENTERED);
    }
  },
};

export const validateCount = {
  validation(count) {
    this.CountNoEntered(count);
    this.CountCharEntered(count);
    this.CountPointEntered(count);
    this.CountNegativeEntered(count);
  },
  CountNoEntered(value) {
    if (!value) {
      throw new Error(ERROR_MESSAGE.COUNT_NO_ENTERED);
    }
  },
  CountCharEntered(value) {
    if (isNaN(+value)) {
      throw new Error(ERROR_MESSAGE.COUNT_CHAR_ENTERED);
    }
  },
  CountPointEntered(value) {
    if (regularExpressionCheck(+value, REGEX.POINT_NUMBER)) {
      throw new Error(ERROR_MESSAGE.COUNT_POINT);
    }
  },
  CountNegativeEntered(value) {
    if (!regularExpressionCheck(+value, REGEX.POSITIVE_NUMBER)) {
      throw new Error(ERROR_MESSAGE.COUNT_NEGATIVE);
    }
  },
};
