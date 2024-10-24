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
