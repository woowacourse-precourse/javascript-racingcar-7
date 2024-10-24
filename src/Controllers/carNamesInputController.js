import { Console } from '@woowacourse/mission-utils';
import { isCarNamesInputNotEmpty, carNamesLengthValidator } from '../Models/validations/carNamesValidator.js';
import { ERROR_MESSAGES } from '../Errors/errorMessages.js';

const validateCarNamesLength = spliteAndtrimmedCarName => {
  if (carNamesLengthValidator(spliteAndtrimmedCarName)) {
    return true;
  }

  if (carNamesLengthValidator(spliteAndtrimmedCarName) === false) {
    throw new Error(ERROR_MESSAGES.OVERLENGTH_INPUT);
  }
};

export default validateCarNamesLength;
