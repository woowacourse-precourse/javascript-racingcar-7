// 경주 게임 로직 클래스

import Car from "./Car.js";
import { generateRandomNumber } from "./random.js";
import { ERROR_MESSAGES } from "./constants.js";

class Game {
  constructor(carNames, raceCount) {
    this.cars = this.createCars(carNames);
    this.raceCount = this.validateRaceCount(raceCount);
  }

  createCars(carNames) {
    const cars = carNames.split(",").map(name => new Car(name.trim()));
    cars.forEach(car => {
      if (car.name.length > 5) throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
    });
    return cars;
  }

  validateRaceCount(raceCount) {
    if (isNaN(raceCount)) {
      throw new Error(ERROR_MESSAGES.INVALID_RACE_COUNT);
    }

    const raceCountNumber = Number(raceCount);

    if (raceCountNumber === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_RACE_COUNT_ZERO);
    }

    return raceCountNumber;
  }


  startRace() {
    for (let i = 0; i < this.raceCount; i++) {
      this.cars.forEach(car => car.move(generateRandomNumber()));
      this.printRaceStatus();
    }
  }

  printRaceStatus() {
    this.cars.forEach(car => {
      console.log(car.getDisplayPosition());
    });
    console.log("");
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition()));
    return this.cars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName())
      .join(", ");
  }
}

export default Game;