import CustomError from '../constants/CustomError.js';
import ERROR from '../constants/errors.js';

const validateRoundCount = (roundCount) => {
  if (roundCount === undefined || roundCount === null || roundCount === '') {
    throw new CustomError(
      ERROR.EMPTY_ROUND_COUNT.message,
      ERROR.EMPTY_ROUND_COUNT.name,
    );
  }

  if (Number.isNaN(roundCount)) {
    throw new CustomError(
      ERROR.NAN_ROUND_COUNT.message,
      ERROR.NAN_ROUND_COUNT.name,
    );
  }

  if (roundCount < 1) {
    throw new CustomError(
      ERROR.INVALID_ROUND_COUNT.message,
      ERROR.INVALID_ROUND_COUNT.name,
    );
  }
};

export default validateRoundCount;
