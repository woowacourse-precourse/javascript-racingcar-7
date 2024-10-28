import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputUtils from "../Utils/OutputUtils.js";
import RandomNumberGenerator from "./RandomNumberGenerator.js";

class RacingGame {
  constructor(carNames, tryNumber) {
    this.cars = carNames.map(name => new Car(name));
    this.tryNumber = tryNumber;
  }

  start() {
    Console.print('');
    Console.print('실행 결과');

    for (let i = 0; i < this.tryNumber; i++) {
      this.racing();
      OutputUtils.printNowRacing(this.cars);
    }
    OutputUtils.printWinners(this.cars);
  }

  racing() {
    this.cars.forEach(car => {
      if (RandomNumberGenerator.generate() >= 4) {
        car.move();
      }
    });
  }
}



export default RacingGame;