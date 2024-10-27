import ErrorMessage from '../constants/ErrorMessage.js';
import { CarInfo } from '../constants/racingConfig.js';

// carNameInput 관련 에러체크
export const isNoNameInput = (nameInput) => {
  if (nameInput == '' || nameInput === undefined || nameInput === null) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.NO_NAME_INPUT);
  }
};
export const isNoCarName = (name) => {
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

// turnInput 관련 에러체크
export const isNoTurnInput = (turnInput) => {
  if (turnInput == '' || turnInput === undefined || turnInput === null) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.NO_TURN_INPUT);
  }
};
export const isNotNumber = (numberString) => {
  if (!numberString.match(/^[0-9]+$/)) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.NOT_NUMBER_TURN);
  }
};

// 에러 처리 함수
const throwError = (prefix, message) => {
  throw new Error(`${prefix} ${message}`);
};
