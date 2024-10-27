import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';
/* 
1. ,만 쓰고 값을 입력하지 않았을 때 
2. 

*/
export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
  EMPTY_CAR_NAME: '자동차 이름에 빈 값이 포함되어 있습니다. 모든 이름을 입력해 주세요.',
  NAME_LENGTH_EXCEEDED: '자동차 이름은 5자를 넘을 수 없습니다.',
};

const checkForEmptyInput = (carNameList) => {
  if (!carNameList) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return carNameList;
};

const checkEmptyValue = (carNameList) => {
  if (carNameList.some((carName) => carName === '')) {
    throwError(ERROR_MESSAGES.EMPTY_CAR_NAME);
  }
  return carNameList;
};

const checkNameLengthLimit = (carNameList) => {
  carNameList.forEach((carName) => {
    if (carName.length >= 5) {
      throwError(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
    }
  });
  return carNameList;
};

const validateCarName = (carNameList) => {
  runValidators([checkForEmptyInput, checkEmptyValue, checkNameLengthLimit], carNameList);
};

export default validateCarName;
