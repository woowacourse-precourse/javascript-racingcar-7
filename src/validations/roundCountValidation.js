import { ROUND_COUNT_ERROR_MESSAGES } from "../constants/errorMessage.js";
import { CONDITIONS } from "../constants/conditon.js";

export const roundCountValidation = (roundCount) => {
  checkEmptyRoundCount(roundCount);
  checkNumberRoundCount(roundCount);
};

const checkEmptyRoundCount = (roundCount) => {
  if (roundCount.trim() === CONDITIONS.EMPTY_STRING) {
    throw new Error(ROUND_COUNT_ERROR_MESSAGES.EMPTY_COUNT);
  }
};

const checkNumberRoundCount = (roundCount) => {
  const round = Number(roundCount);
  if (!Number.isSafeInteger(round) || round < CONDITIONS.MIN_ROUND_COUNT) {
    throw new Error(ROUND_COUNT_ERROR_MESSAGES.INVALID_COUNT);
  }
};
