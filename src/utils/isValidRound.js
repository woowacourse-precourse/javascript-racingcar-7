import { ERROR_MESSAGES } from "../constants/errorConstants.js";

export function isValidRound(round) {
  if (round === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ROUND);
  }
  if (!(parseInt(round, 10) > 0)) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND_NUMBER);
  }
}
