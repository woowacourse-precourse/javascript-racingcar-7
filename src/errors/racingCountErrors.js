import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const isRacingCountInputNoEmpty = racingCountInput => {
  if (racingCountInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const isRacingCountTypeNumber = racingCountInput => {
  if (!isNaN(racingCountInput)) {
    return true;
  }
  if (isNaN(racingCountInput)) {
    throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  }
};

export { isRacingCountInputNoEmpty, isRacingCountTypeNumber };
