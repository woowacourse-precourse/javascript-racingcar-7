import { OUTPUT_MESSAGE } from '../constant/index.js';
import { getRandomNumberInRange } from '../utils/random.js';
import Car from './Car.js';

class RacingGame {
  #cars;

  #tryNumber;

  constructor(carNames, tryNumber) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#tryNumber = tryNumber;
  }

  race() {
    const raceResult = [];
    for (let i = 0; i < this.#tryNumber; i += 1) {
      this.#moveCarsOnce();
      raceResult.push(this.#serializeCarsState());
    }

    return raceResult;
  }

  #moveCarsOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = getRandomNumberInRange(0, 9);
      if (randomNumber >= 4) car.move();
    });
  }

  #serializeCarsState() {
    const serialized = this.#cars.map((car) => {
      const { name, distance } = car.getCarInformation();
      let newDistance = '';
      for (let i = 0; i < distance; i += 1) {
        newDistance += OUTPUT_MESSAGE.STRINGYFY_DISTANCE;
      }
      return `${name} : ${newDistance}`;
    });

    return serialized;
  }

  getWinners() {
    const max = Math.max(...this.#cars.map((car) => car.getCarInformation().distance));
    const winners = this.#cars
      .filter((car) => car.getCarInformation().distance === max)
      .map((car) => car.getCarInformation().name);

    return winners;
  }
}

export default RacingGame;
