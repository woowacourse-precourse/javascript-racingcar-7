import {
  ERROR_MESSAGES,
  LETTER_ONLY_REGEX,
} from "../../constants/constants.js";

export function validateCarNameSeparator(inputCarNameArray) {
  if (
    !inputCarNameArray.includes(",") &&
    inputCarNameArray.length === 1 &&
    !LETTER_ONLY_REGEX.test(inputCarNameArray)
  )
    throw new Error(ERROR_MESSAGES.INVALID_NAME_SEPARATOR);
  return;
}
