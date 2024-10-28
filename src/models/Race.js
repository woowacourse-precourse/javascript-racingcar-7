import Car from './Car.js';
import randomUtils from '../utils/randomUtils.js';

class Race {
  constructor(carNames, roundCount) {
    this.cars = carNames.map(name => new Car(name));
    this.roundCount = roundCount;
  }

  advanceCars() {
    this.cars.forEach(car => {
      if (randomUtils.shouldMove()) {
        car.move();
      }
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
  }
}

export default Race;
