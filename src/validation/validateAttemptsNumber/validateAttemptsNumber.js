import { ERROR_MESSAGES } from "../../constants/constants";

export function validateAttemptsNumber(inputAttemptsNumber) {
  const isValid = isNaN(Number(inputAttemptsNumber))
  if (isValid) throw new Error(ERROR_MESSAGES.ATTEMPTS_MUST_BE_NUMERIC);
}
