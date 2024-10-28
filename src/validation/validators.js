import { CHAR_REGEX } from "../constants/charRegex.js";
import { COMMA } from "../constants/delimiter.js";

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
