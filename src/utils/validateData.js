import {
  isDuplicateName,
  isNoTurnInput,
  isNoNameInput,
  isNotNumber,
  isOverName,
} from './checkError.js';

export const validateCarNameList = (carNameList) => {
  carNameList.forEach((carName) => {
    isNoNameInput(carName);
    isOverName(carName);
  });
  isDuplicateName(carNameList);
};

export const validateTurnString = (turnString) => {
  isNoTurnInput(turnString);
  isNotNumber(turnString);
};
