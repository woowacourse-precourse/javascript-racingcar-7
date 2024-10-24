import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const isRacingCountInputEmpty = racingCountInput => {
  if (racingCountInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const isRacingCountTypeNumber = racingCarInput => {
  if (!isNaN(racingCarInput)) {
    return true;
  }
  if (isNaN(racingCarInput)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
};

export { isRacingCountInputEmpty, isRacingCountTypeNumber };
