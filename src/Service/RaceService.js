import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';

class RaceService {
  #cars;

  constructor() {
    this.#cars = [];
    this.outputView = new OutputView();
  }

  start(carNames, attemptCount) {
    for (let i = 0; i < carNames.length; i++) {
      this.#cars.push(new Car(carNames[i]));
    }

    this.outputView.printExecutionResults();
    for (let i = 0; i <= attemptCount; i++) {
      this.moveCar(this.#cars);
      this.outputView.printAllCarProgress(
        this.#cars.map(car => car.getName()),
        this.#cars.map(car => car.getForwardCount())
      );
    }

    const winnners = this.determineWinners(this.#cars);
    this.outputView.printWinners(winnners);
  }

  generateRandomNumber() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomValue;
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

  determineWinners(cars) {
    const maxDistance = Math.max(...cars.map(car => car.getForwardCount()));
    const winnners = cars
      .filter(car => car.getForwardCount() === maxDistance)
      .map(car => car.getName());

    return winnners;
  }
}

export default RaceService;
