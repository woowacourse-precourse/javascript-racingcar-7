import GAME from '../constants/Game.js';

class CarNameValidation {
  static checkIsEmpty(name) {
    return name.trim() === '';
  }
  static checkNameLength(name) {
    const nameArr = name.split(',');
    return nameArr.some(
      (car) => car.trim().length < GAME.minNameLength || car.trim().length > GAME.maxNameLength,
    );
  }
  static checkDuplicate(name) {
    return new Set(name.split(',')).size !== name.split(',').length;
  }
}

export default CarNameValidation;
