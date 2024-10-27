import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class CarRacing {
  constructor(cars, attemptCount) {
    this.cars = cars.map((car) => new Car(car));
    this.attemptCount = attemptCount;
  }

  startRace() {
    for (let i = 0; i < this.attemptCount; i++) {
      this.cars.forEach((car) => car.forward());
      this.displayRace();
    }
  }

  displayRace() {
    this.cars.forEach((car) =>
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`)
    );
    Console.print('');
  }
}

export default CarRacing;
