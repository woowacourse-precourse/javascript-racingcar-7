import { Console } from "@woowacourse/mission-utils";
import Car from './Car.js';

class Racing {
  constructor(inputCar, attempts) {
    this.cars = this.getValidCar(inputCar);
    this.attempts = this.getValidNumber(attempts);
  }

  inValidCarName(carName) {
    if (carName.length <= 5) return true;
    throw new Error("[ERROR]");
  }

  getValidCar(inputCar) {
    const carNames = inputCar.split(",").map((name) => name.trim());
    carNames.forEach((carName) => {
      this.inValidCarName(carName);
    });
    return carNames.map((car) => new Car(car));
  }

  getValidNumber(attempts) {
    const tryNum = Number(attempts);
    if (isNaN(tryNum) || tryNum <= 0) {
      throw new Error("[ERROR]");
    }
    return tryNum;
  }

  start() {
    Console.print("실행 결과");
    for (let i = 0; i < this.attempts; i++) {
      this.showResult();
      Console.print("");
    }
  }

  showResult() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(
        `${car.getName()} : ${"-".repeat(car.getPosition())}`
      );
    });
  }

  getWinner() {
    const maxPosition = Math.max(
      ...Array.from(this.cars, (car) => car.position)
    );
    const winner = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.getName());

    return winner;
  }

  showWinner() {
    const winner = this.getWinner();
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default Racing;