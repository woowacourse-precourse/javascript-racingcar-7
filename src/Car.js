class Car {
  #carName;
  #movingDistance;
  #DECISION_POINT_NUMBER = 4;

  constructor(carName) {
    this.#carName = carName;
    this.#movingDistance = 0;
  }

  move(randomNumber) {
    if (randomNumber < DECISION_POINT_NUMBER) {
      return this.#movingDistance;
    }

    return ++this.#movingDistance;
  }
}
