import { Car } from './Car.js';

export class raceController {
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => new Car(name.trim()));
    this.attemps = inputAttemps;
  }

  raceResult() {
    this.cars.forEach((car) => {
      car.move();
      const displayLocation = '-'.repeat(car.getLocation());
      Console.print(`${car.getName()} : ${displayLocation}`);
    });
    Console.print('\n');
  }

  raceAttemps() {
    for (let i = 0; i < this.attemps; i++) {
      this.raceResult();
    }
  }

  raceWinner() {
    const maxLocation = Math.max(...this.cars.map((car) => car.getLocation()));
  }
}
