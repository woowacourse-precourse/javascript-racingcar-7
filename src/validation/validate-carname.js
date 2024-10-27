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

const checkNameLengthLimit = (carNameList) => {
  carNameList.forEach((carName) => {
    if (carName.length >= 5) {
      throwError(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
    }
  });
  return carNameList;
};

const validateCarName = (input) => {
  checkForEmptyInput(input);
  const carNameList = input.split(',');
  runValidators([checkNameLengthLimit], carNameList);
};

export default validateCarName;
