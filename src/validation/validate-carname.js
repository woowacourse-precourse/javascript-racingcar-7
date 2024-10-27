import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
  NAME_LENGTH_EXCEEDED: '자동차 이름은 5자를 넘을 수 없습니다.',
};

const checkForEmptyInput = (input) => {
  if (!input) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return input;
};

const checkNameLengthLimit = (input) => {
  const carList = input.split(',');
  carList.forEach((carName) => {
    if (carName.length >= 5) {
      throwError(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
    }
  });
  return input;
};

const validateCarName = (input) => {
  runValidators([checkForEmptyInput, checkNameLengthLimit], input);
};

export default validateCarName;
