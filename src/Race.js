import { getRandomNumber } from './utils.js';
import Car from './Car.js';
import { GAME_RULES } from './constants.js';

class Race {
  constructor() {
    this.cars = [];
    this.attemptCount = 0;
  }

  generateRandomDistances() {
    this.cars.forEach(car => {
      const randomDistance = getRandomNumber(0, 9);
      if (randomDistance >= GAME_RULES.MOVE_THRESHOLD) {
        car.move(1);
      }
    });
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map(car => car.getDistance()));
    return this.cars
      .filter(car => car.getDistance() === maxDistance)
      .map(car => car.getName());
  }
}

export default Race;
