class InputParser {
  static parseCarNameInput(input) {
    return input.split(',');
  }

  static parseAttemptCountInput(input) {
    return parseInt(input, 10);
  }
}

export default InputParser;
