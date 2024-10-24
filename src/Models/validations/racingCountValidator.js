const validateRacingCount = racingCarInput => {
  if (!isNaN(racingCarInput)) {
    return true;
  }
  if (isNaN(racingCarInput)) {
    return false;
  }
};

export default validateRacingCount;
