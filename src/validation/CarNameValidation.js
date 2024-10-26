import GAME from '../constants/Game.js';

class CarNameValidation {
  static checkIsEmpty(name) {
    return name.trim() === '';
  }
  static checkNameLength(name) {
    const min = GAME.minNameLength;
    const max = GAME.maxNameLength;
    return name.split(',').some((car) => car.trim().length < min || car.trim().length > max);
  }
  static checkDuplicate(name) {
    return new Set(name.split(',')).size !== name.split(',').length;
  }
}

export default CarNameValidation;
