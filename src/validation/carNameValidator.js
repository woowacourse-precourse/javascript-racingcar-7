import {
  isEmptyCarName,
  hasDoubleComma,
  hasDuplicateNames,
  isInvalidNameLength,
  hasSpecialCharacters,
} from "./validators.js";
import { CAR_NAME } from "../constants/error.js";
import { isCarNameEndingWithComma } from "./validators.js";
import { splitCarNames } from "../car/splitCarNames.js";

export const carNameValidator = (carNames) => {
  const carNameArr = splitCarNames(carNames);
  const validation = { result: true, message: "", names: carNameArr };

  if (isEmptyCarName(carNames)) {
    validation.result = false;
    validation.message = CAR_NAME.EMPTY;
    return validation;
  }

  if (isCarNameEndingWithComma(carNames)) {
    validation.result = false;
    validation.message = CAR_NAME.EMPTY;
    return validation;
  }

  if (hasDoubleComma(carNames)) {
    validation.result = false;
    validation.message = CAR_NAME.DOUBLE_COMMA;
    return validation;
  }

  if (hasSpecialCharacters(carNames)) {
    validation.result = false;
    validation.message = CAR_NAME.SPECIAL_CHAR;
    return validation;
  }

  if (hasDuplicateNames(carNameArr)) {
    validation.result = false;
    validation.message = CAR_NAME.DUPLICATE;
    return validation;
  }

  if (isInvalidNameLength(carNameArr)) {
    validation.result = false;
    validation.message = CAR_NAME.MAX_LENGTH;
    return validation;
  }

  return validation;
};
