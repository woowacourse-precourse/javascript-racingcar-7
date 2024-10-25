import { MIN_MOVE_THRESHOLD } from "./Constants.js";

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.carPositions = this.initializeCarPositions(cars);
  }

  initializeCarPositions(cars) {
    const carPositions = {};
    cars.forEach((car) => {
      carPositions[car] = "";
    });
    return carPositions;
  }

  canMoveToForward(num) {
    return num >= MIN_MOVE_THRESHOLD;
  }
}

export default Race;
