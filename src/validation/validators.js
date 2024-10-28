import { CHAR_REGEX } from "../constants/charRegex.js";
import { COMMA } from "../constants/delimiter.js";
import { CAR_NAME } from "../constants/error.js";

export const isEmptyCarName = (carNames) => {
  return !carNames;
};

export const isCarNameEndingWithComma = (carNames) => {
  return carNames.endsWith(COMMA);
};

export const hasDoubleComma = (carNames) => {
  return carNames.includes(COMMA.repeat(2));
};

export const hasSpecialCharacters = (carNames) => {
  return CHAR_REGEX.test(carNames);
};

export const hasDuplicateNames = (carNameArr) => {
  const uniqueCarSet = new Set(carNameArr);
  return uniqueCarSet.size !== carNameArr.length;
};

export const isInvalidNameLength = (carNameArr) => {
  return carNameArr.some((name) => name.length > CAR_NAME.MAX);
};
