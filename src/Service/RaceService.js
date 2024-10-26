import Car from '../Model/Car.js';

class RaceService {
  #cars;

  constructor() {
    this.#cars = [];
  }

  start(carNames, attemptCount) {
    for (let i = 0; i <= carNames.length; i++) {
      this.#cars.push(new Car(carNames[i]));
    }

    for (let i = 0; i <= attemptCount; i++) {
      this.moveCar(this.#cars);
    }
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  decideMoveForward() {
    if (this.generateRandomNumber() >= 4) {
      return true;
    }
    return false;
  }

  moveCar(cars) {
    cars.map(car => {
      if (this.decideMoveForward()) {
        car.moveForward();
      }
    });
  }
}

export default RaceService;
