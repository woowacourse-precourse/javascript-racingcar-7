import ValidationError from "./ValidationError.js";
import { ERROR_BODY } from "../constants/errorMessage.js";

class CarNameLengthError extends ValidationError {
  constructor() {
    super(ERROR_BODY.carNameLength);
  }
}

export default CarNameLengthError;
