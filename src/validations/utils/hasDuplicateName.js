import { ERROR_MESSAGES } from "../../constants/errorConstants";

function checkDuplicate(name, nameSet) {
  if (nameSet.has(name)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
  }
  nameSet.add(name);
}

export function hasDuplicateName(extractCarNameArray) {
  const nameSet = new Set();
  extractCarNameArray.forEach((name) => checkDuplicate(name, nameSet));
}
