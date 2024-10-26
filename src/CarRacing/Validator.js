import Splitter from './Splitter.js';
import { ValidationUtils, throwError } from './Utils/validationUtils.js';

class Validator {
  #validateCarName(carName) {
    throwError(ValidationUtils.isInvalidNameLength(carName));
    throwError(ValidationUtils.isNotString(carName));
  }

  #validateCarNames(carNames) {
    throwError(ValidationUtils.hasMinimumLengthValues(carNames));
    throwError(ValidationUtils.hasDuplicateValues(carNames));
  }

  #validateCarNamesInput(cars) {
    this.#validateCarNames(cars);
    cars.forEach(carName => this.#validateCarName(carName));
  }

  #validateRaceCountInput(raceCountInput) {
    const raceCount = raceCountInput.trim();
    throwError(ValidationUtils.isNotNumber(raceCount));
    throwError(ValidationUtils.hasMinimumValue(raceCount));
  }

  validate(carNamesInput, raceCountInput) {
    const carNames = Splitter.split(carNamesInput);
    this.#validateCarNamesInput(carNames);
    this.#validateRaceCountInput(raceCountInput);

    return { carNames, raceCount: Number(raceCountInput.trim()) };
  }
}
export default Validator;
