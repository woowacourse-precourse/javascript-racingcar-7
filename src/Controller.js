import { Car } from './Car.js';

export class raceController {
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => new Car(name.trim()));
    this.attemps = inputAttemps;
  }

  raceResult() {
    this.cars.forEach((car) => {
      car.move();
    });
  }
}
