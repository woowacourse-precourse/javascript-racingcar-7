class Validation {
  #maxNameLength;

  #nameSeparator;

  constructor(maxNameLength, nameSeparator) {
    this.#maxNameLength = maxNameLength;
    this.#nameSeparator = nameSeparator;
  }
}

export default Validation;
