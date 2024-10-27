import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력이 비어 있습니다.',
  EMPTY_CAR_NAME: '자동차 이름에 빈 값이 포함되어 있습니다.',
  NAME_LENGTH_EXCEEDED: '자동차 이름은 5자를 넘을 수 없습니다.',
  SINGLE_CAR_NAME: '두 대 이상의 자동차 이름을 입력해 주세요.',
  DUPLICATE_CAR_NAME: '자동차 이름이 중복되었습니다.',
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

const checkOneValue = (carNameList) => {
  if (carNameList.length === 1) {
    throwError(ERROR_MESSAGES.SINGLE_CAR_NAME);
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

const checkDuplicateNames = (carNameList) => {
  const uniqueNames = new Set(carNameList);
  if (uniqueNames.size !== carNameList.length) {
    throwError(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  }
  return carNameList;
};

const validateCarName = (carNameList) => {
  runValidators([checkForEmptyInput, checkEmptyValue, checkOneValue, checkNameLengthLimit, checkDuplicateNames], carNameList);
};

export default validateCarName;
