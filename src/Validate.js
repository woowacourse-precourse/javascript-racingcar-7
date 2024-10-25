export class Validate {
  validateError = (input) => {
    if (!this.checkLengthError(input)) return true;
    return false;
  };

  checkLengthError = (input) => {
    if (input.length > 5) return true;
    return false;
  };
}
