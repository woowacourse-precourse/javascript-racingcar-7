import { COMMA } from "../constants/delimiter.js";

export const isEmptyCarName = (carNames) => {
  return !carNames;
};

export const isCarNameEndingWithComma = (carNames) => {
  return carNames.endsWith(COMMA);
};
