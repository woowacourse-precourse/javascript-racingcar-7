import { DELIMITER, MESSAGES } from "../config/config.js";

export const parseStrings = (string) => {
  if (string === "") {
    throw new Error(MESSAGES.ERROR_INPUT_EMPTY);
  }

  return string.split(DELIMITER);
};
