import { Console } from "@woowacourse/mission-utils";
import { getCarArray } from "./getUtils.js";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    const tryCount = await Console.readLineAsync("시도할 횟수는 몇회인가요?\n");

    const splittedCarNames = carNames.split(",");
    const carArray = getCarArray(splittedCarNames);
  }
}

export default App;
