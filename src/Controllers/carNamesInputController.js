import { carNamesLengthValidator } from '../Models/validations/carNamesValidator.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const validateCarNamesLength = spliteAndtrimmedCarName => {
  if (carNamesLengthValidator(spliteAndtrimmedCarName)) {
    return true;
  }

  if (carNamesLengthValidator(spliteAndtrimmedCarName) === false) {
    throw new Error(ERROR_MESSAGES.OVERLENGTH_INPUT);
  }
};

export default validateCarNamesLength;
