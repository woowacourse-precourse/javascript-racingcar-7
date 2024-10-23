import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateCarNameSeparator(inputCarName) {
  if (!inputCarName.includes(","))
    throw new Error(ERROR_MESSAGES.INVALID_NAME_SEPARATOR);
}
