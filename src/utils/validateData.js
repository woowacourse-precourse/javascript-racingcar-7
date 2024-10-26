import {
  isDuplicateName,
  isNoName,
  isNotNumber,
  isOverName,
} from './checkError.js';

export const validateCarNameList = (carNameList) => {
  carNameList.forEach((carName) => {
    isNoName(carName);
    isOverName(carName);
  });
  isDuplicateName(carNameList);
};

export const validateTurnString = (turnString) => {
  isNotNumber(turnString);
};
