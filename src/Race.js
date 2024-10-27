import { getRandomNumber } from './utils.js';
import Car from './Car.js';
import { GAME_RULES } from './constants.js';

class Race {
  constructor() {
    this.cars = [];
    this.attemptCount = 0;
  }

  setCars(carNames) {
    this.cars = carNames.map(name => new Car(name.trim()));
  }

  setAttemptCount(attemptCount) {
    this.attemptCount = attemptCount;
  }

  generateRandomDistances() {
    this.cars.forEach(car => {
      const randomDistance = getRandomNumber(0, 9);
      if (randomDistance >= GAME_RULES.MOVE_THRESHOLD) {
        car.move(1);
      }
    });
  }

  getRaceStatus() {
    return this.cars.map(car => ({
      name: car.getName(),
      distance: car.getDistance(),
    }));
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map(car => car.getDistance()));
    return this.cars
      .filter(car => car.getDistance() === maxDistance)
      .map(car => car.getName());
  }
}

export default Race;
