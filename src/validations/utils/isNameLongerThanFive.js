import { ERROR_MESSAGES } from "../../constants/errorConstants";

function checkLength(name) {
  if (name.length > 5) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
  }
}

export function isNameLongerThanFive(extractCarNameArray) {
  extractCarNameArray.forEach((name) => checkLength(name));
}
