import { ERROR } from "../constants/error.js";

export const convertStringToNumber = (string) => {
  if (isNaN(Number(string))) {
    throw new Error(ERROR.NAN);
  }
  return Number(string);
};
