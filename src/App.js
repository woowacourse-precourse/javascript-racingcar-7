import { Console } from "@woowacourse/mission-utils";
import Car from "./models/Car.js";
import Race from "./models/Race.js";
import { validateAttempts, validateCarNames } from "./validators.js";
import { MESSAGES } from "./constant.js";

class App {
  async run() {
      // 경주에 참가할 자동차 이름 입력 받기
      Console.print(
        MESSAGES.PLEASE_CAR_NAMES
      );
      const carNames = await Console.readLineAsync("");
      validateCarNames(carNames);
      const cars = carNames.split(",").map((carName) => new Car(carName));

      // 시도할 주행 횟수 입력
      Console.print(MESSAGES.PLEASE_NUMBER_OF_ATTEMPTS);
      const numOfAttempts = await Console.readLineAsync("");
      validateAttempts(numOfAttempts);
      const race = new Race(cars, numOfAttempts);

      // 입력값을 바탕으로 주행 시작!
      race.start();
  }
}

export default App;
