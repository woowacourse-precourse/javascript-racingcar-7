import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Validator from "../utils/Validator.js";
import Parser from "../utils/Parser.js";

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(namesInput) {
    const carNames = Parser.parseCarNames(namesInput);
    Validator.validateCarNames(carNames);
    this.cars = carNames.map((name) => new Car(name));
  }

  // 모든 자동차들의 움직임을 결정하는 메서드
  moveAllCars() {
    this.cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      car.moveCar(randomNumber);
    });
  }

  // 모든 자동차들의 현재 상태를 리턴하는 메서드
  getCarsStatus() {
    return this.cars.map((car) => car.getCurrentStatus());
  }

  validateTryCount(countInput) {
    return Validator.validateTryCount(countInput);
  }

  findMaxPosition() {
    return Math.max(...this.cars.map((car) => car.position));
  }

  findWinners() {
    const maxPosition = this.findMaxPosition();
    const winners = this.cars.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default RacingGame;
