import CAR_RACE from "../constants/carRace";

export default class CarRace {
  #cars;
  #result;
  constructor(cars) {
    this.#cars = cars;
    this.#result = [];
  }

  get result() {
    return this.#result;
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.position));
  }

  getWinner() {
    const maxPosition = this.#getMaxPosition();
    return this.#cars.filter((car) => car.position === maxPosition);
  }

  moveCar(carName, randomNumber) {
    const targetCar = this.#cars.find((car) => car.name === carName);
    if (randomNumber >= CAR_RACE.MOVE_THRESHOLD) {
      targetCar.move();
    }
  }
}
