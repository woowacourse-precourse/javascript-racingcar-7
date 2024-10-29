import Car from "./Car.js";
import { NUMBER } from "./utils/constants.js";
import { Function } from "./utils/Function.js";

class Race {
  #cars;

  constructor(arr) {
    this.#cars = arr.map((name) => new Car(name));
  }

  async progressCar() {
    for (const car of this.#cars) {
      const randomNumber = await Function.getRandomNumber();
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

    return Function.checkJoint(
      sortResult,
      sortResult[0].position,
      sortResult[0].name
    );
  }
}

export default Race;
