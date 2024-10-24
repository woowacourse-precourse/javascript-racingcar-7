import { ERROR_MESSAGES } from "../constants/errorConstants.js";

export function isValidRound(round) {
  if (round === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ROUND);
  }
  if (isNaN(parseInt(round, 10))) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND_NUMBER);
  }
}
