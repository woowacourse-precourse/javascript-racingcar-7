import { ERROR_MESSAGES } from "../../constants/constants.js";

export function validateCarNameLength(inputCarNames) {
  const validatedCarNames = inputCarNames.filter(
    (carName) => carName.length <= 5
  );
  const isValid = inputCarNames.length === validatedCarNames.length;
  if (!isValid) throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
  return;
}
