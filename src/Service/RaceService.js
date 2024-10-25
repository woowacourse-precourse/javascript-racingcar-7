import Car from '../Model/Car.js';

class RaceService {
  #car;

  constructor() {
    this.#car = [];
  }

  start(carNames, attemptCount) {
    for (let i = 0; i <= carNames.length; i++) {
      this.#car.push(new Car(carNames[i]));
    }
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

export default RaceService;
