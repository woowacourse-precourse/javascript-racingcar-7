import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarManager {
  constructor(carNameArr = []) {
    this.carNameArr = carNameArr.map((name) => new Car(name));
  }

  getCarNameArr() {
    return this.carNameArr;
  }

  moveCars() {
    this.carNameArr.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
    });
  }

  getEachStepResult() {
    let stepResult = "";
    this.carNameArr.forEach((car) => {
      stepResult += car.getStringDistance();
    });
    return stepResult;
  }

  getWinner() {
    let winners = [];
    const maxCar = this.carNameArr.reduce((prev, el) => {
      return prev.getDistance() >= el.getDistance() ? prev : el;
    });
    this.carNameArr.forEach((car) => {
      if (car.getDistance() === maxCar.getDistance()) {
        winners.push(car.getName());
      }
    });

    return winners.join(", ");
  }
}

export default CarManager;
