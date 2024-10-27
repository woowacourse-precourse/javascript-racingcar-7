import ERROR_MESSAGES from "../constants/errorMessages.js";
import throwError from "../utils/throwError.js";

const emptyInput = (input) => {
  if (!input) throwError(ERROR_MESSAGES.INPUT_IS_EMPTY);
  return input;
};

export default emptyInput;
