import { ERROR_MESSAGES } from "../constants/errorConstants.js";

function checkEmpty(name) {
  if (name === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_NAME);
  }
}

export function isInputEmpty(extractCarNameArray) {
  extractCarNameArray.forEach((name) => checkEmpty(name));
}
