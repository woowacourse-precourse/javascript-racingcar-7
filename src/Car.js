import { NUMBER } from "./constants";

class Car {
  #carName;
  #movingDistance = 0;
  #distanceLog = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move(randomNumber) {
    if (randomNumber < NUMBER.DECISION_POINT) {
      return;
    }

    this.#movingDistance++;
  }

  saveResult() {
    this.#distanceLog.push(this.#movingDistance);
  }

  moveFurtherThan(maxCar) {
    return maxCar.#movingDistance < this.#movingDistance;
  }

  moveLessThan(maxCar) {
    return maxCar.#movingDistance > this.#movingDistance;
  }

  getResultBy(gameRound) {
    return this.#distanceLog[gameRound];
  }

  getName() {
    return this.#carName;
  }
}

export default Car;
