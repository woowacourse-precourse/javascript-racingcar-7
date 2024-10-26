import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(namesInput) {
    const carNames = this.separateCarNames(namesInput);
    this.validateDuplicateCarName(carNames);
    this.cars = carNames.map((name) => new Car(name));
  }

  // 모든 자동차들의 움직임을 결정하는 메서드
  moveAllCars() {
    this.cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      car.moveCar(randomNumber);
    });
  }

  separateCarNames(namesInput) {
    return namesInput.split(",").map((name) => name.trim());
  }

  validateDuplicateCarName(names) {
    const uniqueNames = new Set(names); // Set은 중복 허용 x
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  validateTryCount(countInput) {
    const count = Number(countInput);

    if (count <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1이상이어야 합니다.");
    }

    if (Number.isNaN(count)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    return count;
  }

  // 모든 자동차들의 현재 상태를 리턴하는 메서드
  getCarsStatus() {
    return this.cars.map((car) => car.getCurrentStatus());
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
