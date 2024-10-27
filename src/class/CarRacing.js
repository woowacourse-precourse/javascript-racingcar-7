import Car from './Car.js';

class CarRacing {
  constructor(carNames, attemptCount) {
    this.carNames = carNames.map((car) => new Car(car));
    this.attemptCount = attemptCount;
  }
}

export default CarRacing;
