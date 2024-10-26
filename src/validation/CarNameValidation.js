import GAME from '../constants/Game.js';

class CarNameValidation {
  static checkIsEmpty(name) {
    return name.trim() === '';
  }
  static checkNameLength(name) {
    return name.split(',').some((car) => {
      const trimedLength = car.trim().length;
      return trimedLength < GAME.minNameLength || trimedLength > GAME.maxNameLength;
    });
  }
}

export default CarNameValidation;
