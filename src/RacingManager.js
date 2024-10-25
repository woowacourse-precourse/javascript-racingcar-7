import Car from './Car.js';
import Validation from './Validation.js';

class RacingManager {
  static register(nameInput) {
    const nameList = this.normalizeCarNames(nameInput);
    const registeredCars = nameList.map((name) => new Car(name));
    return registeredCars;
  }

  static normalizeCarNames(nameInput) {
    const MAX_NAME_LENGTH = 5;
    const carNames = [...nameInput];
    const parsedNames = this.parseCarNames(carNames);
    const validCarNames = Validation.carNames(parsedNames, MAX_NAME_LENGTH);
    return validCarNames;
  }

  static parseCarNames(names) {
    const splittedNames = names.split(',');
    const trimmedNames = splittedNames.map((name) => name.trim());
    return trimmedNames;
  }

  static normalizeTotalRounds(totalRounds) {
    const parsedTotalRounds = this.parseTotalRounds(totalRounds);
    const validTotalRounds = Validation.totalRounds(parsedTotalRounds);
    return validTotalRounds;
  }

  static parseTotalRounds(totalRounds) {
    return Number(totalRounds);
  }
}

export default RacingManager;
