import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCarNames } from "./utils/errors/car-name-validator.js"; // 유효성 검사 함수 가져오기

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = this.parseCarNames(input);
      validateCarNames(carNames); // 유효성 검사 함수 호출
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
