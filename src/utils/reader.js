import InputView from '../view/InputView.js';
import { validateCarNames, validatePositiveInteger } from './validate.js';

export const readAndValidateCarNames = async () => {
  const carNames = await InputView.readCarNames();
  validateCarNames(carNames);

  return carNames;
};

export const readAndValidateTryNumber = async () => {
  const tryNumber = await InputView.readTryNumber();
  validatePositiveInteger(tryNumber);

  return tryNumber;
};
