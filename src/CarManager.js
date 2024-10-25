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
}

export default CarManager;
