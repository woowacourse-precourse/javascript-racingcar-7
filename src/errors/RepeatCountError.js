import ValidationError from "./ValidationError.js";
import { ERROR_BODY } from "../constants/errorMessage.js";

class RepeatCountError extends ValidationError {
  constructor() {
    super(ERROR_BODY.repeatCount);
  }
}

export default RepeatCountError;
