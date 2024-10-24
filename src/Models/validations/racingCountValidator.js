import { ERROR_MESSAGES } from '../../Errors/errorMessages.js';

const isRacingCountInputEmpty = racingCountInput => {
  if (racingCountInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const validateRacingCount = racingCarInput => {
  if (!isNaN(racingCarInput)) {
    return true;
  }
  if (isNaN(racingCarInput)) {
    return false;
  }
};

export { isRacingCountInputEmpty, validateRacingCount };
