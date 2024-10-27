import { ERROR_MESSAGES } from "../constants/errorConstants.js";

export function isValidRound(round) {
  if (round === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ROUND);
  }
  const checkRound = Number(round);
  
  if (isNaN(checkRound) || checkRound <= 0 || !Number.isInteger(checkRound)) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND_NUMBER);
  }
}
