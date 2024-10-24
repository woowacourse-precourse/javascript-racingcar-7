import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCarNames, validateAttemptCount } from "./utils/validator.js";
import { raceCars, getRandomNumber } from "./utils/race-logic.js";

class App {
  async run() {
    try {
      const carInput = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = this.parseCarNames(carInput);
      validateCarNames(carNames);

      const tryCountInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = validateAttemptCount(tryCountInput);

      MissionUtils.Console.print("\n실행 결과\n");
      raceCars(carNames, tryCount, getRandomNumber);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  parseCarNames(input) {
    return input.split(",").map((name) => name.trim());
  }
}

export default App;
