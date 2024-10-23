import { MESSAGES } from "../config/config.js";

export const convertNumber = (string) => {
  if (isNaN(string)) {
    throw new Error(MESSAGES.ERROR_INVALID_NUMBER);
  }

  return Number(string);
};
