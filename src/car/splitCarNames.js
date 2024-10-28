import { COMMA } from "../constants/delimiter.js";

export const splitCarNames = (carNames) => {
  return carNames.split(COMMA).map((name) => name.trim());
};
