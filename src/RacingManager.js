import Validation from './Validation.js';

class RacingManager {
  #nameInput;

  #totalRoundsInput;

  constructor(nameInput, totalRoundsInput) {
    this.#nameInput = nameInput;
    this.#totalRoundsInput = totalRoundsInput;
  }

  #acceptCarNames() {
    const nameInput = this.#nameInput;
    const parsedNames = RacingManager.parseCarNames(nameInput);
    const carNames = Validation.carNames(parsedNames);
    return carNames;
  }

  static parseCarNames(names) {
    const splittedNames = names.split(',');
    const trimmedNames = splittedNames.map((name) => name.trim());
    return trimmedNames;
  }
}

export default RacingManager;
