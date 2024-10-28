class InputParser {
  static parseCarNameInput(input) {
    return input.split(',').map((name) => name.trim());
  }

  static parseAttemptCountInput(input) {
    return parseInt(input, 10);
  }
}

export default InputParser;
