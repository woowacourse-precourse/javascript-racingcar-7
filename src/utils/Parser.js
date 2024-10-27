class Parser {
  static parseCarNames(namesInput) {
    return namesInput.split(",").map((name) => name.trim());
  }
}

export default Parser;
