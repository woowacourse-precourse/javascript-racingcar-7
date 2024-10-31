import ERROR_MESSAGES from "../constants/errorMessages.js";
import throwError from "../utils/throwError.js";

const validateCarName = (carName) => {
  if (carName.length > 5) throwError(ERROR_MESSAGES.INPUT_NOT_VALID);
  return carName;
};

export default validateCarName;
