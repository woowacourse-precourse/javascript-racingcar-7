import { ERROR_MESSAGES, RACE_MAX_NUM } from "../constants/constants.js"
import OutputView from "../view/OutputView.js"

const validateIsNum = (count) => {
  if (isNaN(count)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_NOT_NUM);
  }
}

const validateIsMinus = (count) => {
  if (count <= 0) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_NOT_POS_NUM);
  }
}

const validateIsExceedingMax = (count) => {
  if (count > RACE_MAX_NUM) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_EXCEEDING_MAX);
  }
}

const RaceCountValidations = (raceCount) => {
  const count = Number(raceCount.trim());

  validateIsNum(count);
  validateIsMinus(count);
  validateIsExceedingMax(count);
}

export default RaceCountValidations;