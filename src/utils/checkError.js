import ErrorMessage from '../constants/ErrorMessage.js';
import { CarInfo } from '../constants/racingConfig.js';

export const isNoName = (name) => {
  if (name.length == 0) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.NO_CAR_NAME);
  }
};

export const isOverName = (name) => {
  if (name.length > CarInfo.MAX_NAME_LENGTH) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.OVER_CAR_NAME);
  }
};

export const isDuplicateName = (nameList) => {
  const nameSet = new Set(nameList);
  if (nameList.length != nameSet.size) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.DUPLICATE_CAR_NAME);
  }
};

export const isNotNumber = (numberString) => {
  if (!numberString.match(/^[0-9]+$/)) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.NOT_NUMBER_TURN);
  }
};

const throwError = (prefix, message) => {
  throw new Error(`${prefix} ${message}`);
};
