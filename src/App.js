import { Console } from "@woowacourse/mission-utils";
import {
  checkDuplicateNames,
  checkNameLength,
  checkRaceCount,
} from "./errors/carsErrors.js";

class App {
  async run() {
    let carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carNameArr = carName.split(",");
    checkNameLength(carNameArr);
    checkDuplicateNames(carNameArr);

    let raceCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    checkRaceCount(raceCount);
  }
}

export default App;
