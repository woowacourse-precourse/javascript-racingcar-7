import { ERROR_MESSAGES } from "../constants/constants.js";
import OutputView from "../view/OutputView.js";

const validateIsString = (carNames) => {
  const isString = (carName) => typeof carName === 'string';
  if (!carNames.every(isString)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_NOT_STRING);
  }
}

const validateIsEmpty = (carNames) => {
  const isEmpty = (carName) => carName.trim() === '';
  if (carNames.some(isEmpty)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_EMPTY);
  }
}

const validateIsTooLong = (carNames) => {
  const isTooLong = (carName) => carName.trim().length > 5;
  if (carNames.some(isTooLong)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_TOO_LONG);
  }
}

const CarNameValidations = (carNames) => {
  validateIsString(carNames);
  validateIsEmpty(carNames);
  validateIsTooLong(carNames);
}

export default CarNameValidations;