import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateCarNameEmptyString(inputCarNameArray) {
  if (inputCarNameArray[inputCarNameArray.length - 1] === "")
    throw new Error(ERROR_MESSAGES.EMPTY_STRING);
  if (inputCarNameArray.some((carName) => carName.trim() === ""))
    throw new Error(ERROR_MESSAGES.EMPTY_STRING);
  return;
}
