import { validateCarNameList, validateTurnString } from './validateData.js';

export const parseCarNameInput = (input) => {
  const carNameList = input.split(',');
  validateCarNameList(carNameList);
  return carNameList;
};

export const parseTurnInput = (input) => {
  validateTurnString(input);
  return Number(input);
};
