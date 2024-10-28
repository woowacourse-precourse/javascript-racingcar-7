import HandleError from './Error.js';

class Validation {
  constructor() {
    this.NAME_INPUT_ERROR = HandleError.NAME_INPUT_ERROR;
    this.ATTEMPT_INPUT_ERROR = HandleError.ATTEMPT_INPUT_ERROR;
  }

  isValidNameLength(name) {
    if (name.length > 5) {
      HandleError.makeError(this.NAME_INPUT_ERROR.TooLongName);
    }
    return true;
  }

  isEmpty(input, errorMesseageObj) {
    if (!input || input.length <= 0) {
      HandleError.makeError(errorMesseageObj.IsEmpty);
    }

    return true;
  }

  isBlank(input, errorMesseageObj) {
    const SPACE_ONLY_REGEX = /^\s*$/;
    if (SPACE_ONLY_REGEX.test(input)) {
      HandleError.makeError(errorMesseageObj.IsBlank);
    }
    return true;
  }

  isInt(input) {
    const INT_REGEX = /^[0-9]*$/;
    if (!INT_REGEX.test(input)) {
      HandleError.makeError(HandleError.ATTEMPT_INPUT_ERROR.IsNotInt);
    }
    return true;
  }

  isValidNamesInput(namesInput) {
    return (
      this.isEmpty(namesInput, this.NAME_INPUT_ERROR) &&
      this.isBlank(namesInput, this.NAME_INPUT_ERROR)
    );
  }

  isValidNameInput(name) {
    return (
      this.isEmpty(name, this.NAME_INPUT_ERROR) &&
      this.isBlank(name, this.NAME_INPUT_ERROR) &&
      this.isValidNameLength(name)
    );
  }

  isValidInputAttempValue(attemptInput) {
    return (
      this.isEmpty(attemptInput, this.ATTEMPT_INPUT_ERROR) &&
      this.isBlank(attemptInput, this.ATTEMPT_INPUT_ERROR) &&
      this.isInt(attemptInput)
    );
  }
}

export default Validation;
