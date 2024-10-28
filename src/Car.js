class Car {
  static DECISION_POINT_NUMBER = 4;

  #carName;
  #movingDistance = 0;
  #distanceLog = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move(randomNumber) {
    if (randomNumber < this.#DECISION_POINT_NUMBER) {
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
