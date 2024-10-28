import { CAR_NAME_VALIDATION_ERROR } from '../constants/constants.js';
import OutputView from '../view/OutputView.js';

const validateIsEmpty = (carNames) => {
  const isEmpty = (carName) => carName === '';
  if (carNames.some(isEmpty)) {
    OutputView.printErrorMessage(CAR_NAME_VALIDATION_ERROR.IS_EMPTY);
  }
}

const validateIsTooLong = (carNames) => {
  const isTooLong = (carName) => carName.length > 5;
  if (carNames.some(isTooLong)) {
    OutputView.printErrorMessage(CAR_NAME_VALIDATION_ERROR.IS_TOO_LONG);
  }
}

const validateDuplicate = (carNames) => {
  const isDuplicate = carNames.some((carName) => {
    return carNames.indexOf(carName) !== carNames.lastIndexOf(carName);
  })
  if (isDuplicate) {
    OutputView.printErrorMessage(CAR_NAME_VALIDATION_ERROR.IS_DUPLICATE);
  }
}

const CarNameValidations = (carNames) => {
  validateIsEmpty(carNames);
  validateIsTooLong(carNames);
  validateDuplicate(carNames);
}

export default CarNameValidations;