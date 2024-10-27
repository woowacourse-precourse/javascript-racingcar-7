import {
  isNoNameInput,
  isNoCarName,
  isOverName,
  isDuplicateName,
  isNoTurnInput,
  isNotNumber,
} from './checkError.js';

export const validateCarNameInput = (carNameInput) => {
  isNoNameInput(carNameInput);
};
export const validateCarNameList = (carNameList) => {
  carNameList.forEach((carName) => {
    isNoCarName(carName);
    isOverName(carName);
  });
  isDuplicateName(carNameList);
};

export const validateTurnInput = (turnString) => {
  isNoTurnInput(turnString);
  isNotNumber(turnString);
};
