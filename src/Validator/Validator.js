import { ERROR_MSG } from "../Constant/Constants.js";

export const Validator = () => {
  const inputCarNameFormat = /^([^,]{1,5})([,][^,]{1,5})+$/;
  const inputCarNameFormatWithNumError = /^[^,]+$/;
  const inputCarNameFormatStartWithCommaStartLine = /^[,].{0,4}/;
  const inputCarNameFormatStartWithCommaInText = /[,][,].{0,4}/;
  const inputCarNameFormatWithLength = /^([^,]+)([,][^,]+)+$/;

  const validateCarNameWithNumError = (userInputs) => {
    if (inputCarNameFormatWithNumError.test(userInputs)) {
      return ERROR_MSG.ERROR_INPUT_NUM_CAR;
    }
  };

  const validateCarNameWithLength = (userInputs) => {
    if (inputCarNameFormatWithLength.test(userInputs)) {
      return ERROR_MSG.ERROR_INPUT_CAR_NAME_LENGTH;
    }
  };

  const validateCarNameWithComma = (userInputs) => {
    if (
      inputCarNameFormatStartWithCommaStartLine.test(userInputs) ||
      inputCarNameFormatStartWithCommaInText.test(userInputs)
    ) {
      return ERROR_MSG.ERROR_INPUT_CAR_COMMA;
    }
  };

  const validateInputCarNameFormat = (userInputs) => {
    if (!inputCarNameFormat.test(userInputs)) {
      const errorMessage =
        validateCarNameWithNumError(userInputs) ||
        validateCarNameWithLength(userInputs) ||
        validateCarNameWithComma(userInputs);
      throw new Error(errorMessage);
    }
  };

  const validateInputIsNumber = (attempts) => {
    if (isNaN(attempts)) {
      return ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS_NUMBER;
    }
  };

  const validateInputIsPlus = (attempts) => {
    if (Number(attempts) < 1) {
      return ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS_PLUS;
    }
  };

  const validateInputNumOfAttempts = (attempts) => {
    const errorMessage =
      validateInputIsNumber(attempts) || validateInputIsPlus(attempts);
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  };

  return { validateInputCarNameFormat, validateInputNumOfAttempts };
};
