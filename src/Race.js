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

  async checkProgress(randomNumber, car) {
    if (randomNumber >= NUMBER.CAN_PROGRESS) {
      return car.progress();
    }
  }
}

export default Race;
