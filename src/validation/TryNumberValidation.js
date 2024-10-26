import GAME from '../constants/Game.js';

class TryNumberValidation {
  static checkIsEmpty(tryNumber) {
    return !tryNumber;
  }

  static checkIsNaN(tryNumber) {
    const number = Number(tryNumber);
    return !Number.isInteger(number) || isNaN(number);
  }

  static checkInRange(tryNumber) {
    const min = GAME.minTryCount;
    const max = GAME.maxTryCount;
    return tryNumber < min || tryNumber > max;
  }
}
export default TryNumberValidation;
