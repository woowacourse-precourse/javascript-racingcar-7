import Car from './Car.js';

class RacingManager {
  #validation;

  constructor(validation) {
    this.#validation = validation;
  }

  register(nameInput) {
    const nameList = this.normalizeCarNames(nameInput);
    const registeredCars = nameList.map((name) => new Car(name));
    return registeredCars;
  }

  normalizeCarNames(nameInput) {
    const MAX_NAME_LENGTH = 5;
    const parsedNames = RacingManager.parseCarNames(nameInput);
    const validCarNames = this.#validation.checkCarNames(
      parsedNames,
      MAX_NAME_LENGTH,
    );

    return validCarNames;
  }

  static parseCarNames(names) {
    const splittedNames = names.split(',');
    const trimmedNames = splittedNames.map((name) => name.trim());
    return trimmedNames;
  }

  normalizeTotalRounds(totalRounds) {
    const parsedTotalRounds = RacingManager.parseTotalRounds(totalRounds);
    const validTotalRounds =
      this.#validation.checkTotalRounds(parsedTotalRounds);
    return validTotalRounds;
  }

  static parseTotalRounds(totalRounds) {
    if (totalRounds !== null) {
      return Number(totalRounds);
    }

    return totalRounds;
  }
}

export default RacingManager;
