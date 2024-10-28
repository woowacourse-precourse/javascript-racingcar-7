// src/utils/WinnerCalculator.js
export default class WinnerCalculator {
  static calculateWinners(cars) {
    const maxPosition = Math.max(...cars.map(car => car.position));
    return cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
  }
}
