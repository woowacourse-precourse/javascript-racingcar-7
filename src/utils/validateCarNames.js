import CustomError from '../constants/CustomError.js';
import ERROR from '../constants/errors.js';

const validateCarNames = (carNames) => {
  if (!Array.isArray(carNames) || carNames.length === 0) {
    throw new CustomError(
      ERROR.EMPTY_CAR_NAMES.message,
      ERROR.EMPTY_CAR_NAMES.name,
    );
  }

  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new CustomError(
        ERROR.INVALID_CAR_NAMES.message,
        ERROR.INVALID_CAR_NAMES.name,
      );
    }
  });
};

export default validateCarNames;
