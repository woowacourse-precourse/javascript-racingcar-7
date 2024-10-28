import ValidationError from "./ValidationError.js";
import { ERROR_BODY } from "../constants/errorMessage.js";

class CarNameEmptyError extends ValidationError {
  constructor() {
    super(ERROR_BODY.carNameEmpty);
  }
}

export default CarNameEmptyError;
