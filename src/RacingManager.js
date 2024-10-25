class RacingManager {
  #nameInput;

  #totalRoundsInput;

  constructor(nameInput, totalRoundsInput) {
    this.#nameInput = nameInput;
    this.#totalRoundsInput = totalRoundsInput;
  }

  static parseCarNames(names) {
    const splittedNames = names.split(',');
    const trimmedNames = splittedNames.map((name) => name.trim());
    return trimmedNames;
  }
}

export default RacingManager;
