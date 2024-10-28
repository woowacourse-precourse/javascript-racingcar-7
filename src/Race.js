import { Random } from "@woowacourse/mission-utils";
import View from "./View.js";

class Race {
  static excute(cars, attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      this.excuteAttempt(cars);
      View.printProgress(cars);
    }
  }
  static excuteAttempt(cars) {
    cars.forEach((car) => {
      const randomNuber = Random.pickNumberInRange(0, 9);
      if (randomNuber > 3) {
        car.increaseDistance();
      }
    });
  }
}

export default Race;
