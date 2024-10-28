import { Console } from "@woowacourse/mission-utils";
import Car from "./models/Car.js";
import Race from "./models/Race.js";

class App {
  async run() {
    try {
      // 경주에 참가할 자동차 이름 입력 받기
      Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = await Console.readLineAsync("");
      const cars = carNames.split(",").map((carName) => new Car(carName));

      // 시도할 주행 횟수 입력
      Console.print("시도할 횟수는 몇 회인가요?");
      const numOfAttempts = await Console.readLineAsync("");
      const race = new Race(cars, numOfAttempts);

      race.start(); // 입력값을 바탕으로 주행 시작
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
