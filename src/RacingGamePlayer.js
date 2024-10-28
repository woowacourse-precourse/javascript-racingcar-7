import Car from './Car.js';

class RacingGamePlayer {
  constructor(carNames, tryNumber) {
    this.cars = this.createCars(carNames);
    this.roundNumber = tryNumber;
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  moveCars() {
    for (let i = 0; i < this.roundNumber; i++) {
      this.cars.forEach((car) => car.move());
    }
  }

  play() {
    this.moveCars();
  }
}

export default RacingGamePlayer;
