import Splitter from './Splitter.js';
import { ValidationUtils, throwError } from './Utils/validationUtils.js';

class Validator {
  #validateCarName(carName) {
    throwError(ValidationUtils.isInvalidNameLength(carName));
    throwError(ValidationUtils.isNotString(carName));
  }

  #validateCarNames(carNames) {
    throwError(ValidationUtils.validateMinimumLength(carNames));
    throwError(ValidationUtils.hasDuplicateValues(carNames));
  }

  #validateCarNamesInput(cars) {
    this.#validateCarNames(cars);
    cars.forEach(carName => this.#validateCarName(carName));
  }

  #validateRaceCountINput(raceCountInput) {
    throwError(ValidationUtils.isNotNumber(raceCountInput));
    throwError(ValidationUtils.validateMinimumValue(raceCountInput));
  }

  validate(carNamesInput, raceCountInput) {
    this.#validateCarNamesInput(Splitter.split(carNamesInput));
    this.#validateRaceCountINput(raceCountInput.trim());
  }
}
export default Validator;
