import { isEmptyString, isLongerThan } from './validator.js';
import { CAR_NAME_SEPARATOR, MAX_CAR_NAME_LENGTH } from '../constants/Config.js';
import { ERROR_MESSAGE } from '../constants/UI.js';

const someConditionPipe = function (data, ...fn) {
  return fn.some((fn) => fn(data));
};

export const carNameValidatePipe = function (carNameString) {
  const carNames = carNameString.split(CAR_NAME_SEPARATOR);
  for (const carName of carNames) {
    if(someConditionPipe(carName, isEmptyString, isLongerThan(MAX_CAR_NAME_LENGTH))) {
      throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.WRONG_CAR_NAME}`);
    }
  }
  const carSet = new Set(carNames.map((carname) => carname.trim()));
  if (carSet.size !== carNames.length) {
    throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.DUPLICATED}`);
  }
  return true;
};

export const iterationValidatePipe = function (iterationString) {
  if (isNaN(iterationString)) {
    throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.IS_NOT_NUMBER}`);
  }
  const parsedNumber = parseInt(iterationString, 10);
  if (parsedNumber !== Number(iterationString)) {
    throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.IS_NOT_INTEGER}`);
  }
  return true;
};
