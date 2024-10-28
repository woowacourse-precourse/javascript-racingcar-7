import { CHAR_REGEX } from "../constants/charRegex.js";
import { COMMA } from "../constants/delimiter.js";
import { CAR_NAME } from "../constants/error.js";

export const isEmptyCarName = (carNames) => {
  return !carNames;
};
