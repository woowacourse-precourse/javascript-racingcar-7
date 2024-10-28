import ValidationError from "./ValidationError.js";
import { ERROR_BODY } from "../constants/errorMessage.js";

class CarNameDuplicatedError extends ValidationError {
  constructor() {
    super(ERROR_BODY.carNameDuplicated);
  }
}

export default CarNameDuplicatedError;
