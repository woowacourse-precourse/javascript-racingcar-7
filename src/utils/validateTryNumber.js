import InputValidator from "./InputValidator.js";

export const validateTryNumber = (parsedTryNumber) => {
  InputValidator.isPositiveInteger(parsedTryNumber);
  InputValidator.isMaxValue(parsedTryNumber, 10000);
  InputValidator.isNotInteger(parsedTryNumber);
};
