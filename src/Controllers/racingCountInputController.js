import validateRacingCount from '../Models/validations/racingCountValidator.js';

const validateRacingCountNumberType = racingCountInput => {
  if (validateRacingCount(racingCountInput)) {
    return true;
  }
  if (validateRacingCount(racingCountInput) === false) {
    return false;
  }
};
