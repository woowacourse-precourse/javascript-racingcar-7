import GAME from '../constants/Game.js';

class TryNumberValidation {
  static checkIsEmpty(tryNumber) {
    return !tryNumber;
  }

  static checkIsNaN(tryNumber) {
    const number = Number(tryNumber);
    return !Number.isInteger(number) || isNaN(number);
  }
}
export default TryNumberValidation;
