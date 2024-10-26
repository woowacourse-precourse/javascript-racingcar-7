import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateDuplicateCarNames(inputCarNameArray) {
  const carNameSet = new Set(inputCarNameArray);
  const uniqueCarNamesArray = Array.from(carNameSet);
  const isValid = inputCarNameArray.length === uniqueCarNamesArray.length;
  if (!isValid) throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAMES);
  return;
}
