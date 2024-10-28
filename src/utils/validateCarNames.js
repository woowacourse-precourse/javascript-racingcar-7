import InputValidator from './InputValidator.js';

export const validateCarNames = (carList) => {
  InputValidator.isNameLength(carList);
  InputValidator.isSameName(carList);
  carList.forEach((name) => InputValidator.isEmpty(name));
};
