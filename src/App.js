import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  constructor() {
    this.cars = [];
  }
  async run() {
    let inputNames, count;
    try {
      inputNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    } catch (error) {
      throw new Error("[ERROR] : 입력 에러가 발생했습니다.");
    }
    const names = inputNames.split(",");

    this.cars = names.map((name) => new Car(name));

    Console.print("\n실행결과");
    for (let i = 0; i < count; i++) {
      this.cars.forEach((car) => {
        car.moveRandomDistance();
        car.getStatus();
      });
      Console.print("\n");
    }
  }
}

export default App;
