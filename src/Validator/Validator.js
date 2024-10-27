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
      return (
        validateCarNameWithNumError(userInputs) ||
        validateCarNameWithLength(userInputs) ||
        validateCarNameWithComma(userInputs)
      );
    }
  };

  const validateInputNumOfAttempts = (userInputs) => {
    if (isNaN(userInputs)) {
      return ERROR_MSG.ERROR_INPUT_WITH_ATTEMPTS;
    }
  };

  return { validateInputCarNameFormat, validateInputNumOfAttempts };
};
