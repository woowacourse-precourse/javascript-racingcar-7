import { RACE_COUNT_VALIDATION_ERROR, RACE_MAX_NUM } from '../constants/constants.js'
import OutputView from '../view/OutputView.js'

const validateIsNum = (count) => {
  if (isNaN(count)) {
    OutputView.printErrorMessage(RACE_COUNT_VALIDATION_ERROR.IS_NOT_NUM);
  }
}

const validateIsPositiveInteger = (count) => {
  if (count <= 0) {
    OutputView.printErrorMessage(RACE_COUNT_VALIDATION_ERROR.IS_NOT_POSITIVE_INTEGER);
  }
}

const validateIsExceedingMax = (count) => {
  if (count > RACE_MAX_NUM) {
    OutputView.printErrorMessage(RACE_COUNT_VALIDATION_ERROR.IS_EXCEEDING_MAX);
  }
}

const RaceCountValidations = (raceCount) => {
  const count = Number(raceCount.trim());

  validateIsNum(count);
  validateIsPositiveInteger(count);
  validateIsExceedingMax(count);
}

export default RaceCountValidations;