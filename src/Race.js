import Car from "./Car.js";

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
    if (randomNumber >= 4) {
      return car.progress();
    }
  }
}

export default Race;
