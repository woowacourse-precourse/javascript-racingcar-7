import ERROR_MESSAGES from '../constants/errorMessages.js';

const isRacingCountInputNoEmpty = (racingCountInput) => {
  if (racingCountInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const isRacingCountTypeNumber = (racingCountInput) => {
  if (Number.isNaN(Number(racingCountInput))) {
    throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  }
};

export { isRacingCountInputNoEmpty, isRacingCountTypeNumber };
