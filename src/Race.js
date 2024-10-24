import Car from "./Car.js";
import { NUMBER } from "./Constants/constants.js";

class Race {
  #cars;

  constructor(arr) {
    this.#cars = arr.map((name) => new Car(name));
  }

  async progressCar() {
    for (const car of this.#cars) {
      const randomNumber = await car.getRandomNumber();
      await this.checkProgress(randomNumber, car);
    }
  }

  async attemptResult() {
    let attemptResultArr = [];

    for (const car of this.#cars) {
      attemptResultArr.push(await car.getAttemptResult());
    }

    return attemptResultArr;
  }

  async checkProgress(randomNumber, car) {
    if (randomNumber >= NUMBER.CAN_PROGRESS) {
      return car.progress();
    }
  }

  async winner() {
    let result = [];

    for (const car of this.#cars) {
      result.push(await car.getPosition());
    }

    const sortResult = result.sort((a, b) => b.position - a.position);

    return this.checkJoint(
      sortResult,
      sortResult[0].position,
      sortResult[0].name
    );
  }

  checkJoint(arr, winnersPosition, winnersName) {
    let winners = [winnersName];

    for (let i = 1; i < arr.length; i++) {
      const isSamePosition = winnersPosition === arr[i].position;

      if (isSamePosition) {
        winners.push(arr[i].name);
      }

      if (!isSamePosition) break;
    }

    return winners;
  }
}

export default Race;
