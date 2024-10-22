import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateDuplicateCarNames(inputCarNames) {
  const carNameSet = new Set(inputCarNames);
  const uniqueCarNamesArray = Array.from(carNameSet);
  const isValid = inputCarNames.length === uniqueCarNamesArray.length;
  if (!isValid) throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAMES);
}
