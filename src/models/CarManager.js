import Validator from '../utils/Validator.js';

class CarManager {
  static makeCarMap(cars) {
    const carArray = cars.split(',').map(car => car.trim());
    Validator.carValidation(carArray);
    const carsMap = new Map();
    carArray.forEach(car => {
      carsMap.set(car, 0);
    });
    return carsMap;
  }

  static getHighScoreCars(map) {
    let maxHighScore = 0;
    map.forEach(value => {
      maxHighScore = Math.max(maxHighScore, value);
    });

    const highScoreCars = [];
    map.forEach((value, key) => {
      if (value === maxHighScore) highScoreCars.push(key);
    });
    return highScoreCars;
  }
}
export default CarManager;
