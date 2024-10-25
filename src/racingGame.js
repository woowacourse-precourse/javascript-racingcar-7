import { Console } from "@woowacourse/mission-utils";
import Car from "./car.js";

class RacingGame {
  constructor() {
    this.cars = [];
    this.init();
  }

  async init() {
    let names;
    const userInputNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    names = userInputNames.split(",");
    names.forEach((element) => {
      this.cars.push(new Car(element, 0));
    });
    console.log(this.cars);
  }
}

export default RacingGame;
