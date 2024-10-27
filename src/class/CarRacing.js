import Car from './Car.js';

class CarRacing {
  constructor(carNames) {
    this.carNames = carNames.map((car) => new Car(car));
  }
}

export default CarRacing;
