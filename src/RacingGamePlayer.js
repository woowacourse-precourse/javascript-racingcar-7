import Car from './Car.js';

class RacingGamePlayer {
  constructor(carNames, tryNumber) {
    this.cars = this.createCars(carNames);
    this.roundNumber = tryNumber;
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }
  play() {}
}

export default RacingGamePlayer;
