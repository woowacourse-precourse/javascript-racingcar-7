import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { validateCarNameList, validateTryCount } from "./validation.js";

class App {
  async run() {
    const carNameList = await this.readCarName();
    const tryCount = await this.readTryCount();
    validateCarNameList(carNameList);
    validateTryCount(tryCount);
  }

  async readCarName() {
    return await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  async readTryCount() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default App;
