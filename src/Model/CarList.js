// 자동차(이름, 정보) 배열
import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarList {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  getCars() {
    return this.cars;
  }

  moveCars() {
    this.cars.forEach((car) => {
      if (this.canMove()) car.move();
    });
  }

  canMove() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) return true;
    return false;
  }
}

export default CarList;
