import { CONSTANTS } from "./constants.js";

class Parser {
  static parseCarNames(namesInput) {
    return namesInput
      .split(CONSTANTS.NAME_SEPARATOR)
      .map((name) => name.trim());
  }
}

export default Parser;
