import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Utils {
  makeCarObj(inputNames) {
    const names = inputNames.split(",");
    return names.map((name) => new Car(name));
  }

  getWinner(cars) {
    let winner = [cars[0]];
    for (let i = 1; i < cars.length; i++) {
      if (cars[i].movedDistance > winner[0].movedDistance) {
        winner = [cars[i]];
      } else if (cars[i].movedDistance === winner[0].movedDistance) {
        winner.push(cars[i]);
      }
    }

    return winner.map((car) => car.name).join(", ");
  }
}

export default Utils;
