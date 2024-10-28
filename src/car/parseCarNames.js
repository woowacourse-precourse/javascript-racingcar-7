import { ERROR_MESSAGE } from "../constants/error.js";
import { carNameValidator } from "../validation/carNameValidator.js";

export const parseCarNames = (carNames) => {
  const validator = carNameValidator(carNames);

  if (validator.result) {
    return validator.names;
  }

  throw new Error(ERROR_MESSAGE + validator.message);
};
