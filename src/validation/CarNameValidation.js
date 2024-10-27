import GAME from '../constants/Game.js';

class CarNameValidation {
  static checkIsEmpty(name) {
    return name.trim() === '';
  }

  static checkNameLength(name) {
    const min = GAME.minNameLength;
    const max = GAME.maxNameLength;
    const delimeter = GAME.inputDelimeterSign;
    return name.split(delimeter).some((car) => car.trim().length < min || car.trim().length > max);
  }

  static checkDuplicate(name) {
    const delimeter = GAME.inputDelimeterSign;
    return new Set(name.split(delimeter)).size !== name.split(delimeter).length;
  }

  static checkNameCount(name) {
    const min = GAME.minNameCount;
    const max = GAME.maxNameCount;
    const nameCount = name.split(GAME.inputDelimeterSign).length;
    return nameCount < min || nameCount > max;
  }
}

export default CarNameValidation;
