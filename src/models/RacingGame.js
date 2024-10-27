import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(carNames) {
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

  findMaxPosition() {
    return Math.max(...this.cars.map((car) => car.position));
  }

  // 최종 우승자를 리턴하는 메서드
  findWinners() {
    const maxPosition = this.findMaxPosition();
    const winners = this.cars.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default RacingGame;
